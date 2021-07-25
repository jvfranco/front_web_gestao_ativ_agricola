import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnidadeDeMedidaModule, UnidadeDeMedidaRoutingModule } from './unidade-de-medida';
import { CulturaModule, CulturaRoutingModule } from './cultura';
import { LoginModule, LoginRoutingModule, UsuarioModule, UsuarioRoutingModule } from './autenticacao';
import { LayoutModule } from './layout';
import { HibridoModule, HibridoRoutingModule } from './hibrido';
import { InsumoModule, InsumoRoutingModule } from './insumo';
import { MarcaModule, MarcaRoutingModule } from './marca';
import { SafraModule, SafraRoutingModule } from './safra';
import { MaquinaModule, MaquinaRoutingModule } from './maquina';
import { PropriedadeModule, PropriedadeRoutingModule } from './propriedade';
import { PessoaModule, PessoaRoutingModule } from './pessoa';
import { TalhaoModule, TalhaoRoutingModule } from './talhao';
import { HomeModule, HomeRoutingModule } from './home';

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
    MaquinaModule,
    MaquinaRoutingModule,
    UsuarioModule,
    UsuarioRoutingModule,
    PropriedadeModule,
    PropriedadeRoutingModule,
    PessoaModule,
    PessoaRoutingModule,
    TalhaoModule,
    TalhaoRoutingModule,
    HomeModule,
    HomeRoutingModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
