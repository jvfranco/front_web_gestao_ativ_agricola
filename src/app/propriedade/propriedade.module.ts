import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '../layout';
import { PropriedadeService } from './services';
import { 
  AtualizacaoPropriedadeComponent, 
  CadastroPropriedadeComponent, 
  DetalhePropriedadeComponent, 
  ListagemPropriedadeComponent, 
  MapaPropriedadeComponent, 
  PropriedadeComponent 
} from './components';

@NgModule({
  declarations: [
    PropriedadeComponent,
    ListagemPropriedadeComponent,
    CadastroPropriedadeComponent,
    AtualizacaoPropriedadeComponent,
    DetalhePropriedadeComponent,
    MapaPropriedadeComponent
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
    MatSelectModule,
    MatDialogModule,

    HttpClientModule
  ],
  providers: [
    PropriedadeService
  ]
})
export class PropriedadeModule { }
