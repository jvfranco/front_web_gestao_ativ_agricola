import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Marca, MarcaService } from 'src/app/marca';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';
import { Insumo } from '../../models';
import { InsumoService } from '../../services';

@Component({
  selector: 'app-cadastro-insumo',
  templateUrl: './cadastro-insumo.component.html',
  styleUrls: ['./cadastro-insumo.component.css']
})
export class CadastroInsumoComponent implements OnInit {

  unidades?: UnidadeDeMedida[];
  marcas?: Marca[];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: InsumoService,
    private unService: UnidadeDeMedidaService,
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    this.retornarTodasUnidades();
    this.retornarTodasMarcas();
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

  retornarTodasMarcas() {
    this.marcaService.retornarTodasMarcasSemPaginacao().subscribe(
      data => {
        console.log(data);
        this.marcas = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Marcas.', 'Erro', {duration: 5000});
      }
    )
  }


  form = this.fb.group({
    identificacao: ['', Validators.required],
    ingredientesAtivos: ['', Validators.required],
    aplicacao: ['', Validators.required],
    formulacao: ['', Validators.required],
    classeAgronomica: ['', Validators.required],
    modoDeAcao: ['', Validators.required],
    quantidade: ['', Validators.required],
    idUnidadeDeMedida: ['', Validators.required],
    idMarca: ['', Validators.required]
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const insumo: Insumo = this.form.value;
    let msg: string = '';
    this.service.salvarNovaInsumo(insumo).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Insumo cadastrado com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro do Insumo.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }

}
