import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Safra } from '../../models';
import { SafraService } from '../../services';

@Component({
  selector: 'app-atualizacao-safra',
  templateUrl: './atualizacao-safra.component.html',
  styleUrls: ['./atualizacao-safra.component.css']
})
export class AtualizacaoSafraComponent implements OnInit {

  safraID: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: SafraService
  ) { }

  ngOnInit(): void {
    this.safraID = this.route.snapshot.paramMap.get('safraID');
    this.retornarSafraDetalhada(this.safraID);
  }

  form = this.fb.group({
    identificacao: ['', Validators.required],
    dataInicial: ['', Validators.required],
    dataFinal: ['', Validators.required]
  })

  retornarSafraDetalhada(id: string) {
    let msg: string;
    this.service.retornarSafraDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('identificacao')?.setValue(data.identificacao);
        this.form.get('dataInicial')?.setValue(data.dataInicial);
        this.form.get('dataFinal')?.setValue(data.dataFinal);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca da safra.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      } 
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const safra: Safra = this.form.value;
    let msg: string;
    this.service.atualizarSafra(this.safraID, safra).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/safra');
        msg = 'Safra atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      }, 
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização da safra.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    );
  }

}
