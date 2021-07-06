import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Safra } from '../../models';
import { SafraService } from '../../services';

@Component({
  selector: 'app-cadastro-safra',
  templateUrl: './cadastro-safra.component.html',
  styleUrls: ['./cadastro-safra.component.css']
})
export class CadastroSafraComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: SafraService
  ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    identificacao: ['', Validators.required],
    dataInicial: ['', Validators.required],
    dataFinal: ['', Validators.required]
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const safra: Safra = this.form.value;
    let msg: string = '';
    this.service.salvarNovaSafra(safra).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Safra cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro da safra.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }

}
