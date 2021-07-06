import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Insumo } from '../../models';
import { InsumoService } from '../../services';

@Component({
  selector: 'app-listagem-insumo',
  templateUrl: './listagem-insumo.component.html',
  styleUrls: ['./listagem-insumo.component.css']
})
export class ListagemInsumoComponent implements OnInit {

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Insumo>;

  displayedColumns: string[] = ['identificacao', 'ingredientesAtivos', 'formulacao', 'modoDeAcao', 'quantidade', 'unidadeDeMedida', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: InsumoService
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
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
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
    let msg: string;
    this.service.excluirInsumo(id).subscribe(
      data => {
        console.log('Exclusão' + data);
        this.retornarTodos();
        msg = 'Insumo excluído com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão do Insumo.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };

}
