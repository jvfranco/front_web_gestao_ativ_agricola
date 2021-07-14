import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Propriedade, PropriedadeService } from 'src/app/propriedade';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';
import { Talhao, TipoSolo } from '../../models';
import { TalhaoService } from '../../services';
import { MapaTalhaoComponent } from '../dialogs';

@Component({
  selector: 'app-cadastro-talhao',
  templateUrl: './cadastro-talhao.component.html',
  styleUrls: ['./cadastro-talhao.component.css']
})
export class CadastroTalhaoComponent implements OnInit {

  unidades?: UnidadeDeMedida[];
  unid?: UnidadeDeMedida;
  area: any;
  coordenadas?: string;
  disabled: boolean = false;
  propriedades?: Propriedade[];
  tiposSolo: TipoSolo[] = [TipoSolo.ARENOSO, TipoSolo.ARGILOSO, TipoSolo.MISTO];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: TalhaoService,
    private propService: PropriedadeService,
    private unService: UnidadeDeMedidaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.retornarTodasPropriedades();
    this.retornarTodasUnidades();
  }

  retornarTodasPropriedades() {
    this.propService.retornarTodasPropriedadesSemPaginacao().subscribe(
      data => {
        this.propriedades = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Propriedades.', 'Erro', { duration: 5000 });
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
    identificacao: ['', Validators.required],
    tipoSolo: ['', Validators.required],
    propriedade: ['', Validators.required],
    area: [''],
    unidadeDeMedida: ['']
  });

  resetarForm() {
    this.form.reset();
  }

  openDialog(): void {
    if (this.form.invalid) {
      return;
    }

    this.disabled = true;

    let talhao: Talhao = this.form.value;

    const dialogRef = this.dialog.open(MapaTalhaoComponent, {
      width: '800px',
      height: '800px',
      data: talhao
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.form.get('area')?.setValue(result.area);
      this.form.get('unidadeDeMedida')?.setValue(this.unidades?.find(res => res.abreviacao === 'HA'));
      this.coordenadas = result.coordenadas;
    });
  }

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const talhao: Talhao = this.form.value;
    if (this.coordenadas) talhao.coordenadas = this.coordenadas;
    let msg: string = '';
    this.service.salvarNovoTalhao(talhao).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Talhão cadastrado com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro do Talhão.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

}
