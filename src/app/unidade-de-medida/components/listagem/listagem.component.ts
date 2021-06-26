import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UnidadeDeMedida } from '../../models';
import { UnidadeDeMedidaService } from '../../services';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements AfterViewInit {
  unidades: UnidadeDeMedida[] = [];

  displayedColumns: string[] = ['abreviacao', 'descricao'];
  dataSource = new MatTableDataSource<UnidadeDeMedida>(this.unidades);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: UnidadeDeMedidaService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  retornarTodasUnidades() {
    this.service.retornarTodasUnidades().subscribe(
      data => {
        this.unidades = data
      }
    )
  }



}
