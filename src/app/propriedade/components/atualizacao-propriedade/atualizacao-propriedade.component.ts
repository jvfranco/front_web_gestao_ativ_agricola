import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Propriedade } from '../../models';
import { PropriedadeService } from '../../services';
import { Ocupacao, Pessoa, PessoaService } from 'src/app/pessoa';
import { MatDialog } from '@angular/material/dialog';
import { MapaPropriedadeComponent } from '../dialog';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';

@Component({
  selector: 'app-atualizacao-propriedade',
  templateUrl: './atualizacao-propriedade.component.html',
  styleUrls: ['./atualizacao-propriedade.component.css']
})
export class AtualizacaoPropriedadeComponent implements OnInit {

  propriedadeID: any;
  proprietarios?: Pessoa[];
  unidades?: UnidadeDeMedida[];
  coordenadas?: string;
  disabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: PropriedadeService,
    private userService: PessoaService,
    private unService: UnidadeDeMedidaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.retornarTodasPessoasPorOcupacao();
    this.retornarTodasUnidades();
    this.propriedadeID = this.route.snapshot.paramMap.get('propriedadeID');
    this.retornarDetalhado(this.propriedadeID);
  }

  retornarTodasPessoasPorOcupacao() {
    this.userService.retornarTodasPessoasPorOcupacao(Ocupacao.PROPRIETARIO).subscribe(
      data => {
        this.proprietarios = data;
        console.log(this.proprietarios);
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
    idUnidade: [''],
    coordenadas: ['']
  });

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarPropriedadeDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('nome')?.setValue(data.nome);
        this.form.get('idProprietario')?.setValue(data.proprietario.id);
        this.form.get('area')?.setValue(data.area);
        this.form.get('idUnidade')?.setValue(data.unidadeDeMedida.id);
        this.form.get('coordenadas')?.setValue(data.coordenadas);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca de Propriedade.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const propriedade: Propriedade = this.form.value;
    if (this.coordenadas) propriedade.coordenadas = this.coordenadas;
    let msg: string;
    this.service.atualizarPropriedade(this.propriedadeID, propriedade).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/propriedade');
        msg = 'Propriedade atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', { duration: 5000 });
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização da Propriedade.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

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
      this.coordenadas = result.coordenadas;
    });
  }

}
