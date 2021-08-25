import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { AptAtividadeDTO } from '../../models';
import { AtividadeService } from '../../services';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listagem-atividade',
  templateUrl: './listagem-atividade.component.html',
  styleUrls: ['./listagem-atividade.component.css']
})
export class ListagemAtividadeComponent implements OnInit {
  
  @ViewChild('TABLE') table!: ElementRef;

  totalElements: any;
  dataSource !: MatTableDataSource<AptAtividadeDTO>;

  displayedColumns: string[] = ['atividade', 'safra', 'data', 'propriedade', 'talhao', 'maquina', 'insumo', 'qtdInsumo', 'hibrido', 'qtdHibrido', 'funcionario'];

  constructor(
    private snackbar: MatSnackBar,
    public service: AtividadeService
  ) { }

  ngOnInit(): void {
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
    this.service.retornarTodasAtividadesSemPaginacao().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      },
      err => {
        this.snackbar.open('Ocorreram erros na busca das Atividades.', 'Erro', {duration: 5000});
      }
    )
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'atividades.xlsx');
  }

}
