import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListagemComponent, CadastroComponent, UnidadeDeMedidaComponent } from './components';

@NgModule({
  declarations: [
    ListagemComponent,
    CadastroComponent,
    UnidadeDeMedidaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class UnidadeDeMedidaModule { }
