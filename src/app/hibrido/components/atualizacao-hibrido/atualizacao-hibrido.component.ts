import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Cultura } from 'src/app/cultura';
import { Marca, MarcaService } from 'src/app/marca';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';
import { Hibrido } from '../../models';
import { HibridoService } from '../../services';

@Component({
  selector: 'app-atualizacao-hibrido',
  templateUrl: './atualizacao-hibrido.component.html',
  styleUrls: ['./atualizacao-hibrido.component.css']
})
export class AtualizacaoHibridoComponent implements OnInit {

  hibridoID: any;
  culturas?: Cultura[];
  marcas?: Marca[];
  unidades?: UnidadeDeMedida[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: HibridoService,
    private marcaService: MarcaService,
    private unidadeService: UnidadeDeMedidaService
  ) { }

  ngOnInit(): void {
    this.retornarTodasCultura();
    this.retornarTodasMarcas();
    this.hibridoID = this.route.snapshot.paramMap.get('hibridoID');
    this.retornarDetalhado(this.hibridoID);
    this.retornarTodasUnidades();
  }

  form = this.fb.group({
    identificacao: ['', Validators.required],
    idCultura: ['', Validators.required],
    ciclo: ['', Validators.required],
    observacoes: [''],
    idMarca: ['', Validators.required],
    quantidade: [0, Validators.required],
    idUnidadeDeMedida: ['', Validators.required]
  })

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarHibridoDetalhado(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('identificacao')?.setValue(data.identificacao);
        this.form.get('idCultura')?.setValue(data.cultura.id);
        this.form.get('ciclo')?.setValue(data.ciclo);
        this.form.get('observacoes')?.setValue(data.observacoes);
        this.form.get('idMarca')?.setValue(data.marca.id);
        this.form.get('quantidade')?.setValue(data.quantidade);
        this.form.get('idUnidadeDeMedida')?.setValue(data.unidadeDeMedida.id);
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca do h??brido.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      } 
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const hibrido: Hibrido = this.form.value;
    let msg: string;
    this.service.atualizarHibrido(this.hibridoID, hibrido).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/hibrido');
        msg = 'H??brido atualizado com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      }, 
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atuliza????o do h??brido.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    );
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

  retornarTodasUnidades() {
    this.unidadeService.retornarTodasUnidadesSemPaginacao().subscribe(
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
