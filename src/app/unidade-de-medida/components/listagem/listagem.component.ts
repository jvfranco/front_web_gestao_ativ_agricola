import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UnidadeDeMedida } from '../../models';
import { UnidadeDeMedidaService } from '../../services';
import { Paginacao } from '../../../core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  paginacao: Paginacao = {};
  unidadesList: UnidadeDeMedida[] = [];

  displayedColumns: string[] = ['abreviacao', 'descricao', 'acoes'];

  constructor(private service: UnidadeDeMedidaService) { }

  ngOnInit(): void {
    this.retornarTodasUnidades();
  }


  retornarTodasUnidades() {
    this.service.retornarTodasUnidades().subscribe(
      data => {
        this.unidadesList = data['content'];
        console.log(this.unidadesList);
      },
      err => {
        console.log(JSON.stringify(err));
      }
    )
  }



}
