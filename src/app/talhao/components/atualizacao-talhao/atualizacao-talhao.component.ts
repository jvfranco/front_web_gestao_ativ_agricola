import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Propriedade, PropriedadeService } from 'src/app/propriedade';
import { UnidadeDeMedida, UnidadeDeMedidaService } from 'src/app/unidade-de-medida';
import { Talhao, TipoSolo } from '../../models';
import { TalhaoService } from '../../services';
import { MapaTalhaoComponent } from '../dialogs';

@Component({
  selector: 'app-atualizacao-talhao',
  templateUrl: './atualizacao-talhao.component.html',
  styleUrls: ['./atualizacao-talhao.component.css']
})
export class AtualizacaoTalhaoComponent implements OnInit {

  talhaoID: any;
  unidades?: UnidadeDeMedida[];
  coordenadas?: string;
  disabled: boolean = false;
  propriedades!: Propriedade[];
  tiposSolo: TipoSolo[] = [TipoSolo.ARENOSO, TipoSolo.ARGILOSO, TipoSolo.MISTO];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private service: TalhaoService,
    private propService: PropriedadeService,
    private unService: UnidadeDeMedidaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.retornarTodasUnidades();
    this.retornarTodasPropriedades();
    this.talhaoID = this.route.snapshot.paramMap.get('talhaoID');
    this.retornarDetalhado(this.talhaoID);
  }

  retornarTodasPropriedades() {
    this.propService.retornarTodasPropriedadesSemPaginacao().subscribe(
      data => {
        this.propriedades = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Propriedades.', 'Erro', { duration: 5000 });
      }
    )
  }

  retornarTodasUnidades() {
    this.unService.retornarTodasUnidadesSemPaginacao().subscribe(
      data => {
        console.log(data);
        this.unidades = data;
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Unidades de Medida.', 'Erro', { duration: 5000 });
      }
    )
  }

  form = this.fb.group({
    identificacao: ['', Validators.required],
    tipoSolo: ['', Validators.required],
    propriedade: ['', Validators.required],
    area: [''],
    unidadeDeMedida: [''],
    coordenadas: ['']
  });

  retornarDetalhado(id: string) {
    let msg: string;
    this.service.retornarTalhaoDetalhado(id).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.form.get('identificacao')?.setValue(data.identificacao);
        this.form.get('propriedade')?.setValue(data.propriedade);
        this.form.get('area')?.setValue(data.area);
        this.form.get('unidadeDeMedida')?.setValue(data.unidadeDeMedida);
        this.form.get('coordenadas')?.setValue(data.coordenadas);
        switch (data.tipoSolo) {
          case 'ARENOSO':
            this.form.get('tipoSolo')?.setValue(TipoSolo.ARENOSO);
            break;
          case 'ARGILOSO':
            this.form.get('tipoSolo')?.setValue(TipoSolo.ARGILOSO);
            break;
          case 'MISTO':
            this.form.get('tipoSolo')?.setValue(TipoSolo.MISTO);
            break;
        }
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na busca de Talhão.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  atualizar() {
    if (this.form.invalid) {
      return;
    }

    const talhao: Talhao = this.form.value;
    if (this.coordenadas) talhao.coordenadas = this.coordenadas;
    let msg: string;
    this.service.atualizarTalhao(this.talhaoID, talhao).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.router.navigateByUrl('/talhao');
        msg = 'Talhão atualizado com sucesso.';
        this.snackbar.open(msg, 'Sucesso', { duration: 5000 });
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Ocorreram erros na atulização do Talhão.';
        this.snackbar.open(msg, 'Erro', { duration: 5000 });
      }
    );
  }

  resetarForm() {
    this.form.reset();
  }

  openDialog(): void {
    if (this.form.invalid) {
      return;
    }

    this.disabled = true;

    let talhao: Talhao = this.form.value;

    const dialogRef = this.dialog.open(MapaTalhaoComponent, {
      width: '800px',
      height: '800px',
      data: talhao
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.form.get('area')?.setValue(result.area);
      this.coordenadas = result.coordenadas;
    });
  }

}
