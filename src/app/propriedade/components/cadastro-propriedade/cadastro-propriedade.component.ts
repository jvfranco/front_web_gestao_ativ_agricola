import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { unByKey } from 'ol/Observable';
import { Usuario, UsuarioService } from 'src/app/autenticacao';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';
import { Propriedade } from '../../models';
import { PropriedadeService } from '../../services';
import { MapaPropriedadeComponent } from '../dialog';

@Component({
  selector: 'app-cadastro-propriedade',
  templateUrl: './cadastro-propriedade.component.html',
  styleUrls: ['./cadastro-propriedade.component.css']
})
export class CadastroPropriedadeComponent implements OnInit {

  proprietarios?: any[];
  unidades?: UnidadeDeMedida[];
  unid?: UnidadeDeMedida;
  area: any;
  coordenadas?: string;
  disabled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: PropriedadeService,
    private userService: UsuarioService,
    private unService: UnidadeDeMedidaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.retornarTodosUsuarios();
    this.retornarTodasUnidades();
  }

  retornarTodosUsuarios() {
    this.userService.retornarTodosUsuarios().subscribe(
      data => {
        console.log(data);
        this.proprietarios = data.content;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca dos Proprietarios.', 'Erro', { duration: 5000 });
      }
    )
  }

  retornarTodasUnidades() {
    this.unService.retornarTodasUnidadesSemPaginacao().subscribe(
      data => {
        console.log(data);
        this.unidades = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Unidades de Medida.', 'Erro', { duration: 5000 });
      }
    )
  }

  form = this.fb.group({
    nome: ['', Validators.required],
    idProprietario: ['', Validators.required],
    area: [''],
    idUnidade: ['']
  });

  resetarForm() {
    this.form.reset();
  }

  openDialog(): void {
    if (this.form.invalid) {
      return;
    }

    this.disabled = true;

    let propriedade: Propriedade = this.form.value;

    const dialogRef = this.dialog.open(MapaPropriedadeComponent, {
      width: '800px',
      height: '800px',
      data: propriedade
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.form.get('area')?.setValue(result.area);
      this.form.get('idUnidade')?.setValue(this.unidades?.find(res => res.abreviacao === 'HA')?.id);
      this.coordenadas = result.coordenadas;
    });
  }

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const propriedade: Propriedade = this.form.value;
    if (this.coordenadas) propriedade.coordenadas = this.coordenadas;
    console.log(JSON.stringify(propriedade));
    let msg: string = '';
    this.service.salvarNovaPropriedade(propriedade).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Propriedade cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro da Propriedade.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

}
