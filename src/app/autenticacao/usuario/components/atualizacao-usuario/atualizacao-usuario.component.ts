import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/autenticacao';
import { Pessoa, PessoaService } from 'src/app/pessoa';
import { Usuario } from '../../models';
import { UsuarioService } from '../../services';

@Component({
  selector: 'app-atualizacao-usuario',
  templateUrl: './atualizacao-usuario.component.html',
  styleUrls: ['./atualizacao-usuario.component.css']
})
export class AtualizacaoUsuarioComponent implements OnInit {

  perfis: Perfil[] = [Perfil.ADMINISTRADOR, Perfil.USUARIO];
  usuarioID: any;
  pessoas?: Pessoa[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: UsuarioService,
    private pesService: PessoaService
  ) { }

  ngOnInit(): void {
    this.usuarioID = this.route.snapshot.paramMap.get('usuarioID');
    this.retornarDetalhado(this.usuarioID);
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
    perfil: ['', Validators.required]
  })

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarUsuarioDetalhado(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('pessoa')?.setValue(data.pessoa);
        this.form.get('usuario')?.setValue(data.usuario);
        switch (data.perfil) {
          case 'ADMINISTRADOR':
            this.form.get('perfil')?.setValue(Perfil.ADMINISTRADOR);
            break;
          case 'USUARIO':
            this.form.get('perfil')?.setValue(Perfil.USUARIO);
            break;
        }
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca do Usuário.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const usuario: Usuario = this.form.value;
    console.log(JSON.stringify(usuario));
    let msg: string;
    this.service.atualizarUsuario(this.usuarioID, usuario).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/usuario');
        msg = 'Usuário atualizado com sucesso.';
        this.snackbar.open(msg, 'Sucesso', { duration: 5000 });
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização do Usuário.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  resetarForm() {
    this.form.reset();
  }

}
