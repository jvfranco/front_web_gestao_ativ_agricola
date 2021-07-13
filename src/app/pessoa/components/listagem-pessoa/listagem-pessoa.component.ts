import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Pessoa } from '../../models';
import { PessoaService } from '../../services';
import { DetalhePessoaComponent } from '../dialogs';

@Component({
  selector: 'app-listagem-pessoa',
  templateUrl: './listagem-pessoa.component.html',
  styleUrls: ['./listagem-pessoa.component.css']
})
export class ListagemPessoaComponent implements OnInit {

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Pessoa>;

  displayedColumns: string[] = ['nome', 'telefone', 'email', 'ocupacao', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: PessoaService,
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
    this.service.retornarTodasPessoas(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Pessoas.', 'Erro', {duration: 5000});
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
    this.service.excluirPessoa(id).subscribe(
      data => {
        console.log('Exclusão' + data);
        this.retornarTodos();
        msg = 'Pessoa excluída com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão da Pessoa.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };

  openDialog(pessoa?: any): void {
    const dialogRef = this.dialog.open(DetalhePessoaComponent, {
      width: '400px',
      data: pessoa
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
