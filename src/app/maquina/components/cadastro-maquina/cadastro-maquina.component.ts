import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Marca, MarcaService } from 'src/app/marca';
import { Combustivel, Maquina } from '../../models';
import { MaquinaService } from '../../services';

@Component({
  selector: 'app-cadastro-maquina',
  templateUrl: './cadastro-maquina.component.html',
  styleUrls: ['./cadastro-maquina.component.css']
})
export class CadastroMaquinaComponent implements OnInit {

  combustiveis: Combustivel[] = [Combustivel.GASOLINA, Combustivel.ETANOL, Combustivel.OLEO_DIESEL, Combustivel.ELETRICO];
  marcas?: Marca[];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: MaquinaService,
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    this.retornarTodasMarcas();
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
    modelo: ['', Validators.required],
    idMarca: ['', Validators.required],
    horimetro: ['', Validators.required],
    combustivel: ['', Validators.required],
    potencia: ['', Validators.required],
  })

  salvar() {
    if (this.form.invalid) {
      return;
    }

    const maquina: Maquina = this.form.value;
    let msg: string = '';
    this.service.salvarNovaMaquina(maquina).subscribe(
      data => {
        console.log(JSON.stringify(data))
        msg = 'Máquina cadastrada com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
        this.form.reset();
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros no cadastro da Máquina.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  }

  resetarForm() {
    this.form.reset();
  }

}
