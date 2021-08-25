import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnidadeDeMedidaModule, UnidadeDeMedidaRoutingModule } from './unidade-de-medida';
import { CulturaModule, CulturaRoutingModule } from './cultura';
import { LoginModule, LoginRoutingModule, LoginService, UsuarioModule, UsuarioRoutingModule } from './autenticacao';
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
import { TokenInterceptorService } from '../app/interceptor/token-interceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { AtividadeModule, AtividadeRoutingModule } from './atividade';

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
    AtividadeModule,
    AtividadeRoutingModule,
    
    AppRoutingModule
  ],
  providers: [LoginService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
