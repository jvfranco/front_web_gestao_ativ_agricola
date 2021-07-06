import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Cultura } from '../../models';
import { CulturaService } from '../../services';

@Component({
  selector: 'app-listagem-cultura',
  templateUrl: './listagem-cultura.component.html',
  styleUrls: ['./listagem-cultura.component.css']
})
export class ListagemCulturaComponent implements OnInit {

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Cultura>;

  displayedColumns: string[] = ['nome', 'nomeCientifico', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: CulturaService
    ) { }

  ngOnInit(): void {
    this.paginacao.page = 0;
    this.paginacao.size = 10;
    this.paginacao.sort = 'id';
    this.paginacao.direction = 'ASC';
    this.retornarTodasCultura();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retornarTodasCultura() {
    this.service.retornarTodasCultura(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Culturas.', 'Erro', {duration: 5000});
      }
    )
  }

  paginar(pageEvent: PageEvent) {
    this.paginacao.page = pageEvent.pageIndex;
    this.retornarTodasCultura();
  }

  ordenar(sort: Sort) {
    if (sort.direction != '') {
      this.paginacao.sort = sort.active;
      this.paginacao.direction = sort.direction.toUpperCase();
    }

    this.retornarTodasCultura();
  }

  excluirCultura(id: string) {
    let msg: string;
    this.service.excluirCultura(id).subscribe(
      data => {
        console.log(data);
        this.retornarTodasCultura();
        msg = 'Cultura excluída com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão da Cultura.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };

}
