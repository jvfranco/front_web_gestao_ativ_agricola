import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Marca } from '../../models';
import { MarcaService } from '../../services';

@Component({
  selector: 'app-cadastro-marca',
  templateUrl: './cadastro-marca.component.html',
  styleUrls: ['./cadastro-marca.component.css']
})
export class CadastroMarcaComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: MarcaService
  ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    nome: ['', Validators.required]
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const marca: Marca = this.form.value;
    let msg: string = '';
    this.service.salvarNovaMarca(marca).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Marca cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro da marca.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }


}
