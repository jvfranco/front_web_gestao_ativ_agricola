import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HomeService } from '../../services';
import { Ocorrencia } from '../../models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Paginacao } from 'src/app/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home-ocorrencia',
  templateUrl: './home-ocorrencia.component.html',
  styleUrls: ['./home-ocorrencia.component.css']
})
export class HomeOcorrenciaComponent implements OnInit {

  @ViewChild('TABLE') table!: ElementRef;

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Ocorrencia>;

  displayedColumns: string[] = ['titulo', 'descricao', 'dataOcorrencia', 'propriedade', 'talhao', 'posicao'];

  constructor(
    private snackbar: MatSnackBar,
    public service: HomeService
  ) { }

  ngOnInit(): void {
    this.paginacao.page = 0;
    this.paginacao.size = 10;
    this.paginacao.sort = 'id';
    this.paginacao.direction = 'ASC';
    this.retornarTodos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retornarTodos() {
    this.service.retornarTodasOcorrencias(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(JSON.stringify(data));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        this.snackbar.open('Ocorreram erros na busca das Ocorrências.', 'Erro', {duration: 5000});
      }
    )
  }

  paginar(pageEvent: PageEvent) {
    this.paginacao.page = pageEvent.pageIndex;
    this.retornarTodos();
  }

  ordenar(sort: Sort) {
    if (sort.direction != '') {
      this.paginacao.sort = sort.active;
      this.paginacao.direction = sort.direction.toUpperCase();
    }

    this.retornarTodos();
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'ocorrencias.xlsx');
  } 

}
