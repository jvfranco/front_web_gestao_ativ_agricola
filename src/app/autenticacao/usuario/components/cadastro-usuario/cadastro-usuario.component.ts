import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/autenticacao';
import { Pessoa, PessoaService } from 'src/app/pessoa';
import { Usuario } from '../../models';
import { UsuarioService } from '../../services';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  perfis: Perfil[] = [Perfil.ADMINISTRADOR, Perfil.USUARIO];
  visibilidade = true;
  pessoas?: Pessoa[];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: UsuarioService,
    private pesService: PessoaService
  ) { }

  ngOnInit(): void {
    this.buscarPessoas();
  }

  buscarPessoas() {
    this.pesService.retornarTodasPessoasSemPaginacao().subscribe(
      data => {
        this.pessoas = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Pessoas.', 'Erro', {duration: 5000});
      }
    )
  }

  form = this.fb.group({
    pessoa: ['', Validators.required],
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
    perfil: ['', Validators.required],
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const usuario: Usuario = this.form.value;
    console.log(`USUARIO: ${JSON.stringify(usuario)}`);
    let msg: string = '';
    this.service.salvarNovoUsuario(usuario).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Usuário cadastradao com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro do Usuário.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }

}
