import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]]
  });

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          localStorage['token'] = data['data']['token'];
          const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]));
          console.log(JSON.stringify(usuarioData));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            //this.router.navigate(['/admin']);
          } else {
            //this.router.navigate(['/funcionario']);
          }
        },
        err => {
          console.log(JSON.stringify(err));
          let msg: string = 'Tente novamente em instantes.';
          if (err['status'] == 401) {
            msg = 'Email/senha inválido(s).';
          }
          this.snackbar.open(msg, 'Erro', {duration: 5000});
        }
      )
  }

}