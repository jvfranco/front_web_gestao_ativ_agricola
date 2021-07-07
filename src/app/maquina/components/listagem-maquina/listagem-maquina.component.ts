import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Maquina } from '../../models';
import { MaquinaService } from '../../services';

@Component({
  selector: 'app-listagem-maquina',
  templateUrl: './listagem-maquina.component.html',
  styleUrls: ['./listagem-maquina.component.css']
})
export class ListagemMaquinaComponent implements OnInit {

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Maquina>;

  displayedColumns: string[] = ['modelo', 'marca', 'horimetro', 'combustivel', 'potencia', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: MaquinaService
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
    this.service.retornarTodasMaquina(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Máquinas.', 'Erro', {duration: 5000});
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
    this.service.excluirMaquina(id).subscribe(
      data => {
        console.log('Exclusão' + data);
        this.retornarTodos();
        msg = 'Máquina excluída com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão da Máquina.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };

}
