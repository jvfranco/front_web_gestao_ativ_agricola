import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ocupacao, Pessoa } from '../../models';
import { PessoaService } from '../../services';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  ocupacoes: Ocupacao[] = [Ocupacao.PROPRIETARIO, Ocupacao.FUNCIONARIO];
  visibilidade = true;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: PessoaService
  ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required],
    ocupacao: ['', Validators.required]
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const pessoa: Pessoa = this.form.value;
    let msg: string = '';
    this.service.salvarNovaPessoa(pessoa).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Pessoa cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro de Pessoa.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }


}
