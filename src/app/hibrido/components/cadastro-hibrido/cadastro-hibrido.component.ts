import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cultura, CulturaService } from 'src/app/cultura';
import { CulturaDTO, Hibrido } from '../../models';
import { HibridoService } from '../../services';

@Component({
  selector: 'app-cadastro-hibrido',
  templateUrl: './cadastro-hibrido.component.html',
  styleUrls: ['./cadastro-hibrido.component.css']
})
export class CadastroHibridoComponent implements OnInit {

  culturas?: CulturaDTO[];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: HibridoService
  ) { }

  ngOnInit(): void {
    this.retornarTodasCultura();
  }

  retornarTodasCultura() {
    this.service.retornarCulturasDTO().subscribe(
      data => {
        console.log(data);
        this.culturas = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Culturas.', 'Erro', {duration: 5000});
      }
    )
  }


  form = this.fb.group({
    identificacao: ['', Validators.required],
    idCultura: ['', Validators.required],
    ciclo: ['', Validators.required],
    observacoes: ['']
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const hibrido: Hibrido = this.form.value;
    let msg: string = '';
    this.service.salvarNovoHibrido(hibrido).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Híbrido cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro do híbrido.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }

}
