import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '../layout';

import { HomeComponent, HomeOcorrenciaComponent } from './components';
import { HomeService } from './services';

@NgModule({
  declarations: [
    HomeComponent,
    HomeOcorrenciaComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
