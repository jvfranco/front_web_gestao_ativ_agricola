import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from '../../models';
import { MarcaService } from '../../services';

@Component({
  selector: 'app-atualizacao-marca',
  templateUrl: './atualizacao-marca.component.html',
  styleUrls: ['./atualizacao-marca.component.css']
})
export class AtualizacaoMarcaComponent implements OnInit {

  marcaID: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: MarcaService
  ) { }

  ngOnInit(): void {
    this.marcaID = this.route.snapshot.paramMap.get('marcaID');
    this.retornarMarcaDetalhada(this.marcaID);
  }

  form = this.fb.group({
    nome: ['', Validators.required]
  })

  retornarMarcaDetalhada(id: string) {
    let msg: string;
    this.service.retornarMarcaDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('nome')?.setValue(data.nome);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca da marca.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      } 
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const marca: Marca = this.form.value;
    let msg: string;
    this.service.atualizarMarca(this.marcaID, marca).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/marca');
        msg = 'Marca atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      }, 
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização da marca.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    );
  }

}
