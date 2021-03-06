import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Insumo } from '../../models';
import { InsumoService } from '../../services';
import { DetalheInsumoComponent } from '../dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listagem-insumo',
  templateUrl: './listagem-insumo.component.html',
  styleUrls: ['./listagem-insumo.component.css']
})
export class ListagemInsumoComponent implements OnInit {
  
  @ViewChild('TABLE') table!: ElementRef;
  
  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Insumo>;

  displayedColumns: string[] = ['identificacao', 'ingredientesAtivos', 'formulacao', 
          'modoDeAcao', 'quantidade', 'unidadeDeMedida', 'marca', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: InsumoService,
    public dialog: MatDialog
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
    this.service.retornarTodasInsumos(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        this.snackbar.open('Ocorreram erros na busca dos Insumos.', 'Erro', {duration: 5000});
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

  excluir(id: string) {
    this.service.excluirInsumo(id).subscribe(
      data => {
        this.retornarTodos();
        this.snackbar.open('Insumo exclu??do com sucesso.', 'Sucesso', {duration: 5000});
      },
      err => {
        this.snackbar.open('Erro na exclus??o do Insumo.', 'Erro', {duration: 5000});
      }
    )
  };

  openDialog(insumo?: any): void {
    const dialogRef = this.dialog.open(DetalheInsumoComponent, {
      width: '400px',
      data: insumo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'insumo.xlsx');
  }

}
