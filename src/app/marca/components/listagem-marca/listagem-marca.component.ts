import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paginacao } from 'src/app/core';
import { Marca } from '../../models';
import { MarcaService } from '../../services';
import { DetalheMarcaComponent } from '../dialog';

@Component({
  selector: 'app-listagem-marca',
  templateUrl: './listagem-marca.component.html',
  styleUrls: ['./listagem-marca.component.css']
})
export class ListagemMarcaComponent implements OnInit {

  paginacao: Paginacao = {};
  totalElements: any;
  dataSource !: MatTableDataSource<Marca>;

  displayedColumns: string[] = ['nome', 'acoes'];

  constructor(
    private snackbar: MatSnackBar,
    private service: MarcaService,
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
    this.service.retornarTodasMarcas(this.paginacao).subscribe(
      data => {
        this.paginacao.totalElements = data.totalElements;
        console.log(data);
        console.log(JSON.stringify(this.paginacao));
        this.dataSource = new MatTableDataSource(data.content);
      },
      err => {
        console.log(JSON.stringify(err));
        this.snackbar.open('Ocorreram erros na busca das Marcas.', 'Erro', {duration: 5000});
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
    this.service.excluirMarca(id).subscribe(
      data => {
        console.log(data);
        this.retornarTodas();
        msg = 'Marca excluída com sucesso.';
        this.snackbar.open(msg, 'Sucesso', {duration: 5000});
      },
      err => {
        console.log(JSON.stringify(err));
        msg = 'Erro na exclusão da Marca.';
        this.snackbar.open(msg, 'Erro', {duration: 5000});
      }
    )
  };

  openDialog(marca?: Marca): void {
    const dialogRef = this.dialog.open(DetalheMarcaComponent, {
      width: '400px',
      data: marca
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
