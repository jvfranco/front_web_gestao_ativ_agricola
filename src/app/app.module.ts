import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnidadeDeMedidaModule, UnidadeDeMedidaRoutingModule } from './unidade-de-medida';
import { CulturaModule, CulturaRoutingModule } from './cultura';
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { LayoutModule } from './layout';
import { HibridoModule, HibridoRoutingModule } from './hibrido';
import { InsumoModule, InsumoRoutingModule } from './insumo';
import { MarcaModule, MarcaRoutingModule } from './marca';
import { SafraModule, SafraRoutingModule } from './safra';

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
    CulturaModule,
    CulturaRoutingModule,
    HibridoModule,
    HibridoRoutingModule,
    InsumoModule,
    InsumoRoutingModule,
    MarcaModule,
    MarcaRoutingModule,
    SafraModule,
    SafraRoutingModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
