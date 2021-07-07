import { Component, OnInit } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca, MarcaService } from 'src/app/marca';
import { Combustivel, Maquina } from '../../models';
import { MaquinaService } from '../../services';

@Component({
  selector: 'app-atualizacao-maquina',
  templateUrl: './atualizacao-maquina.component.html',
  styleUrls: ['./atualizacao-maquina.component.css']
})
export class AtualizacaoMaquinaComponent implements OnInit {

  combustiveis: Combustivel[] = [Combustivel.GASOLINA, Combustivel.ETANOL, Combustivel.OLEO_DIESEL, Combustivel.ELETRICO];
  marcas?: Marca[];
  maquinaID: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: MaquinaService,
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    this.retornarTodasMarcas();
    this.maquinaID = this.route.snapshot.paramMap.get('maquinaID');
    this.retornarDetalhado(this.maquinaID);
  }

  retornarTodasMarcas() {
    this.marcaService.retornarTodasMarcasSemPaginacao().subscribe(
      data => {
        console.log(data);
        this.marcas = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Marcas.', 'Erro', { duration: 5000 });
      }
    )
  }

  form = this.fb.group({
    modelo: ['', Validators.required],
    idMarca: ['', Validators.required],
    horimetro: ['', Validators.required],
    combustivel: ['', Validators.required],
    potencia: ['', Validators.required],
  })

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarMaquinaDetalhada(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('modelo')?.setValue(data.modelo);
        this.form.get('idMarca')?.setValue(data.marca.id);
        this.form.get('horimetro')?.setValue(data.horimetro);
        this.form.get('potencia')?.setValue(data.potencia);
        switch (data.combustivel) {
          case 'OLEO_DIESEL':
            this.form.get('combustivel')?.setValue(Combustivel.OLEO_DIESEL);
            break;
          case 'GASOLINA':
            this.form.get('combustivel')?.setValue(Combustivel.GASOLINA);
            break;
          case 'ETANOL':
            this.form.get('combustivel')?.setValue(Combustivel.ETANOL);
            break;
          case 'ELETRICO':
            this.form.get('combustivel')?.setValue(Combustivel.ELETRICO);
            break;
        }
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca da Máquina.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const maquina: Maquina = this.form.value;
    console.log(JSON.stringify(maquina));
    let msg: string;
    this.service.atualizarMaquina(this.maquinaID, maquina).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/maquina');
        msg = 'Máquina atualizada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', { duration: 5000 });
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização da Máquina.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  resetarForm() {
    this.form.reset();
  }

}
