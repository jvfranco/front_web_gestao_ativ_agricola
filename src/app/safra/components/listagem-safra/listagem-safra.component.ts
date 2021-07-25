import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Safra } from '../../models';
import { SafraService } from '../../services';
import { DetalheSafraComponent } from '../dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listagem-safra',
  templateUrl: './listagem-safra.component.html',
  styleUrls: ['./listagem-safra.component.css']
})
export class ListagemSafraComponent implements OnInit {

  @ViewChild('TABLE') table!: ElementRef;

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Safra>;

  displayedColumns: string[] = ['identificacao', 'dataInicial', 'dataFinal', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: SafraService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.paginacao.page = 0;
    this.paginacao.size = 10;
    this.paginacao.sort = 'id';
    this.paginacao.direction = 'ASC';
    this.retornarTodas();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retornarTodas() {
    this.service.retornarTodasSafras(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Safras.', 'Erro', {duration: 5000});
      }
    )
  }

  paginar(pageEvent: PageEvent) {
    this.paginacao.page = pageEvent.pageIndex;
    this.retornarTodas();
  }

  ordenar(sort: Sort) {
    if (sort.direction != '') {
      this.paginacao.sort = sort.active;
      this.paginacao.direction = sort.direction.toUpperCase();
    }

    this.retornarTodas();
  }

  excluir(id: string) {
    let msg: string;
    this.service.excluirSafra(id).subscribe(
      data => {
        console.log(data);
        this.retornarTodas();
        msg = 'Safra excluída com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão da Safra.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };

  openDialog(safra?: Safra): void {
    const dialogRef = this.dialog.open(DetalheSafraComponent, {
      width: '400px',
      data: safra
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
    XLSX.writeFile(wb, 'safra.xlsx');
  }

}
