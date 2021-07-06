import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cultura } from '../../models';
import { CulturaService } from '../../services';

@Component({
  selector: 'app-cadastro-cultura',
  templateUrl: './cadastro-cultura.component.html',
  styleUrls: ['./cadastro-cultura.component.css']
})
export class CadastroCulturaComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: CulturaService
  ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    nome: ['', Validators.required],
    nomeCientifico: ['', Validators.required]
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const cultura: Cultura = this.form.value;
    let msg: string = '';
    this.service.salvarNovaCultura(cultura).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Cultura cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro da cultura.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }

}
