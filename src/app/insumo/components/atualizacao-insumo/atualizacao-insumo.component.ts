import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';
import { Insumo } from '../../models';
import { InsumoService } from '../../services';

@Component({
  selector: 'app-atualizacao-insumo',
  templateUrl: './atualizacao-insumo.component.html',
  styleUrls: ['./atualizacao-insumo.component.css']
})
export class AtualizacaoInsumoComponent implements OnInit {

  insumoID: any;
  unidades?: UnidadeDeMedida[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: InsumoService,
    private unService: UnidadeDeMedidaService
  ) { }

  ngOnInit(): void {
    this.retornarTodasUnidades();
    this.insumoID = this.route.snapshot.paramMap.get('insumoID');
    this.retornarDetalhado(this.insumoID);
  }

  form = this.fb.group({
    identificacao: ['', Validators.required],
    ingredientesAtivos: ['', Validators.required],
    aplicacao: ['', Validators.required],
    formulacao: ['', Validators.required],
    classeAgronomica: ['', Validators.required],
    modoDeAcao: ['', Validators.required],
    quantidade: ['', Validators.required],
    idUnidadeDeMedida: ['', Validators.required]
  })

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarInsumoDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('identificacao')?.setValue(data.identificacao);
        this.form.get('ingredientesAtivos')?.setValue(data.ingredientesAtivos);
        this.form.get('aplicacao')?.setValue(data.aplicacao);
        this.form.get('formulacao')?.setValue(data.formulacao);
        this.form.get('classeAgronomica')?.setValue(data.classeAgronomica);
        this.form.get('modoDeAcao')?.setValue(data.modoDeAcao);
        this.form.get('quantidade')?.setValue(data.quantidade);
        this.form.get('idUnidadeDeMedida')?.setValue(data.unidadeDeMedida.id);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca do Insumo.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      } 
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const insumo: Insumo = this.form.value;
    console.log(JSON.stringify(insumo));
    let msg: string;
    this.service.atualizarInsumo(this.insumoID, insumo).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/insumo');
        msg = 'Insumo atualizado com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      }, 
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização do insumo.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    );
  }

  retornarTodasUnidades() {
    this.unService.retornarTodasUnidadesSemPaginacao().subscribe(
      data => {
        console.log(data);
        this.unidades = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Unidades de Medida.', 'Erro', {duration: 5000});
      }
    )
  }

}
