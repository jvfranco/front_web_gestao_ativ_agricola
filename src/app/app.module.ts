import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnidadeDeMedidaModule, UnidadeDeMedidaRoutingModule } from './unidade-de-medida';
import { LoginModule, LoginRoutingModule } from './autenticacao';

import { LayoutModule } from './layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    UnidadeDeMedidaModule,
    UnidadeDeMedidaRoutingModule,
    LayoutModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
