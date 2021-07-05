import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment as env } from '../../../environments/environment';

import { UnidadeDeMedida } from '../models';
import { Paginacao } from 'src/app/core';

@Injectable()
export class UnidadeDeMedidaService {

  private readonly PATH: string = 'unidadeDeMedida';
  private readonly GET_ALL_PATH: string = '/todos';
  private readonly ID_PATH: string = '/{id}';

  constructor(private http: HttpClient) { } 

  retornarTodasUnidades(paginacao: Paginacao): Observable<any> {
    let url = env.baseUrl + this.PATH + this.GET_ALL_PATH;

    if (paginacao != null) {
      url = url + '?page=' + paginacao.page + '&size=' + paginacao.size + '&sort=' + paginacao.sort + '&direction=' + paginacao.direction;
    } 

    console.log('Serviço'+JSON.stringify(url));

    return this.http.get(url);
  }
  
  retornarUnidadeDetalhada(id: string): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id));
  }

  salvarNovaUnidade(unidade: UnidadeDeMedida): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, unidade);
  }

  atualizarUnidade(id: string, unidade: UnidadeDeMedida): Observable<any> {
    return this.http.put(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id), unidade);
  }

  excluirUnidade(id: string): Observable<any> {
    return this.http.delete(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id))
  }

}
