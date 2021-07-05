import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UnidadeDeMedidaService } from '../../services';
import { UnidadeDeMedida } from '../../models';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.css']
})
export class AtualizacaoComponent implements OnInit {

  unidMedidaID: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: UnidadeDeMedidaService
  ) { }

  ngOnInit(): void {
    this.unidMedidaID = this.route.snapshot.paramMap.get('unidMedidaID');
    this.retornarUnidadeDetalhada(this.unidMedidaID);
  }

  form = this.fb.group({
    abreviacao: ['', [Validators.required, Validators.maxLength(3)]],
    descricao: ['', Validators.required]
  })

  retornarUnidadeDetalhada(id: string) {
    let msg: string;
    this.service.retornarUnidadeDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('abreviacao')?.setValue(data['abreviacao']);
        this.form.get('descricao')?.setValue(data['descricao']);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erros.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      } 
    );
  }

  atualizarUnidade() {
    if (this.form.invalid) {
      return;
    }

    const unidadeDeMedida: UnidadeDeMedida = this.form.value;
    let msg: string;
    this.service.atualizarUnidade(this.unidMedidaID, unidadeDeMedida).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/unidade-de-medida');
        msg = 'Unidade de Medida atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      }, 
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erros.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    );
  }

}
