import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Paginacao } from 'src/app/core';
import { environment as env } from '../../../environments/environment';
import { Maquina } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private readonly PATH: string = 'maquina';
  private readonly GET_ALL_PATH: string = '/todos';
  private readonly ID_PATH: string = '/{id}';

  constructor(private http: HttpClient) { } 

  retornarTodasMaquina(paginacao: Paginacao): Observable<any> {
    let url = env.baseUrl + this.PATH + this.GET_ALL_PATH;

    if (paginacao != null) {
      url = url + '?page=' + paginacao.page + '&size=' + paginacao.size + '&sort=' + paginacao.sort + '&direction=' + paginacao.direction;
    } 

    console.log('Serviço'+JSON.stringify(url));

    return this.http.get(url);
  }
  
  retornarMaquinaDetalhada(id: string): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id));
  }

  salvarNovaMaquina(maquina: Maquina): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, maquina);
  }

  atualizarMaquina(id: string, maquina: Maquina): Observable<any> {
    return this.http.put(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id), maquina);
  }

  excluirMaquina(id: string): Observable<any> {
    return this.http.delete(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id))
  }
}
