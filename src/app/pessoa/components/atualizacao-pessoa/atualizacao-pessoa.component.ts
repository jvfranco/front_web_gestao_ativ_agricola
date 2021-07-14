import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ocupacao, Pessoa } from '../../models';
import { PessoaService } from '../../services';

@Component({
  selector: 'app-atualizacao-pessoa',
  templateUrl: './atualizacao-pessoa.component.html',
  styleUrls: ['./atualizacao-pessoa.component.css']
})
export class AtualizacaoPessoaComponent implements OnInit {

  ocupacoes: Ocupacao[] = [Ocupacao.PROPRIETARIO, Ocupacao.FUNCIONARIO];
  pessoaID: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: PessoaService
  ) { }

  ngOnInit(): void {
    this.pessoaID = this.route.snapshot.paramMap.get('pessoaID');
    this.retornarDetalhado(this.pessoaID);
  }

  form = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required],
    ocupacao: ['', Validators.required]
  })

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarPessoaDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('nome')?.setValue(data.nome);
        this.form.get('cpf')?.setValue(data.cpf);
        this.form.get('telefone')?.setValue(data.telefone);
        this.form.get('email')?.setValue(data.email);
        switch (data.ocupacao) {
          case 'PROPRIETARIO':
            this.form.get('ocupacao')?.setValue(Ocupacao.PROPRIETARIO);
            break;
          case 'FUNCIONARIO':
            this.form.get('ocupacao')?.setValue(Ocupacao.FUNCIONARIO);
            break;
        }
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca de Pessoa.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const pessoa: Pessoa = this.form.value;
    console.log(JSON.stringify(pessoa));
    let msg: string;
    this.service.atualizarPessoa(this.pessoaID, pessoa).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/pessoa');
        msg = 'Pessoa atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', { duration: 5000 });
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização da Pessoa.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  resetarForm() {
    this.form.reset();
  }

}
