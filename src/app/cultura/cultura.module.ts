import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CulturaComponent } from './components';
import { LayoutModule } from '../layout';
import { CulturaService } from './services';
import { ListagemCulturaComponent } from './components/listagem-cultura/listagem-cultura.component';
import { CadastroCulturaComponent } from './components/cadastro-cultura/cadastro-cultura.component';
import { AtualizacaoCulturaComponent } from './components/atualizacao-cultura/atualizacao-cultura.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CulturaComponent,
    ListagemCulturaComponent,
    CadastroCulturaComponent,
    AtualizacaoCulturaComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,

    HttpClientModule
  ],
  exports: [
    CulturaComponent
  ],
  providers: [
    CulturaService
  ]
})
export class CulturaModule { }
