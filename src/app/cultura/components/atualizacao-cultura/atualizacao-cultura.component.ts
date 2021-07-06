import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cultura } from '../../models';
import { CulturaService } from '../../services';

@Component({
  selector: 'app-atualizacao-cultura',
  templateUrl: './atualizacao-cultura.component.html',
  styleUrls: ['./atualizacao-cultura.component.css']
})
export class AtualizacaoCulturaComponent implements OnInit {

  culturaID: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: CulturaService
  ) { }

  ngOnInit(): void {
    this.culturaID = this.route.snapshot.paramMap.get('culturaID');
    this.retornarCulturaDetalhada(this.culturaID);
  }

  form = this.fb.group({
    nome: ['', Validators.required],
    nomeCientifico: ['', Validators.required]
  })

  retornarCulturaDetalhada(id: string) {
    let msg: string;
    this.service.retornarCulturaDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('nome')?.setValue(data['nome']);
        this.form.get('nomeCientifico')?.setValue(data['nomeCientifico']);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca da cultura.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      } 
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const cultura: Cultura = this.form.value;
    let msg: string;
    this.service.atualizarCultura(this.culturaID, cultura).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/cultura');
        msg = 'Cultura atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      }, 
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização da cultura.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    );
  }

}
