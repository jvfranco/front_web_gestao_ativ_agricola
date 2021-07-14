import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { 
  AtualizacaoTalhaoComponent,
  CadastroTalhaoComponent,
  DetalheTalhaoComponent,
  ListagemTalhaoComponent, 
  MapaTalhaoComponent, 
  TalhaoComponent 
} from './components';

@NgModule({
  declarations: [
    TalhaoComponent,
    ListagemTalhaoComponent,
    AtualizacaoTalhaoComponent,
    CadastroTalhaoComponent,
    DetalheTalhaoComponent,
    MapaTalhaoComponent
  ],
  imports: [
    CommonModule,
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
    LayoutModule,
    MatCardModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,

    HttpClientModule
  ]
})
export class TalhaoModule { }
