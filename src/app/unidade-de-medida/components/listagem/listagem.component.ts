import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Paginacao } from '../../../core';
import { UnidadeDeMedida } from '../../models';
import { UnidadeDeMedidaService } from '../../services';
import { DetalheUnidMedComponent } from '../dialog';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<UnidadeDeMedida>;

  displayedColumns: string[] = ['abreviacao', 'descricao', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: UnidadeDeMedidaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.paginacao.page = 0;
    this.paginacao.size = 10;
    this.paginacao.sort = 'id';
    this.paginacao.direction = 'ASC';
    this.retornarTodasUnidades();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retornarTodasUnidades() {
    this.service.retornarTodasUnidades(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Unidades de Medidas.', 'Erro', {duration: 5000});
      }
    )
  }

  paginar(pageEvent: PageEvent) {
    this.paginacao.page = pageEvent.pageIndex;
    this.retornarTodasUnidades();
  }

  ordenar(sort: Sort) {
    if (sort.direction != '') {
      this.paginacao.sort = sort.active;
      this.paginacao.direction = sort.direction.toUpperCase();
    }

    this.retornarTodasUnidades();
  }

  excluirUnidade(id: string) {
    let msg: string;
    this.service.excluirUnidade(id).subscribe(
      data => {
        console.log(data);
        this.retornarTodasUnidades();
        msg = 'Unidade de Medida excluída com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão da Unidade de Medida.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };


  openDialog(unidadeDeMedida?: UnidadeDeMedida): void {
    const dialogRef = this.dialog.open(DetalheUnidMedComponent, {
      width: '400px',
      data: unidadeDeMedida
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
