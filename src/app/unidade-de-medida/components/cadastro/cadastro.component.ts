import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UnidadeDeMedidaService } from '../../services';
import { UnidadeDeMedida } from '../../models';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: UnidadeDeMedidaService
  ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    abreviacao: ['', Validators.required, Validators.maxLength(3)],
    descricao: ['', Validators.required]
  })

  salvarNovaUnidade() {
    if (this.form.invalid) {
      return;
    }

    const unidadeDeMedida: UnidadeDeMedida = this.form.value;
    let msg: string = '';
    this.service.salvarNovaUnidade(unidadeDeMedida).subscribe(
      data => {
        console.log(JSON.stringify(data))
        if (data['status'] == 201) {
          msg = 'Unidade de Medida cadastrada com sucesso.';
        }
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erros.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }
}
