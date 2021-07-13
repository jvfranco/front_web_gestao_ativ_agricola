import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Paginacao } from 'src/app/core';
import { environment as env } from '../../../environments/environment';
import { Pessoa } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly PATH: string = 'pessoa';
  private readonly GET_ALL_PATH: string = '/todos';
  private readonly ID_PATH: string = '/{id}';

  constructor(private http: HttpClient) { } 

  retornarTodasPessoas(paginacao: Paginacao): Observable<any> {
    let url = env.baseUrl + this.PATH + this.GET_ALL_PATH;

    if (paginacao != null) {
      url = url + '?page=' + paginacao.page + '&size=' + paginacao.size + '&sort=' + paginacao.sort + '&direction=' + paginacao.direction;
    } 

    console.log('Serviço'+JSON.stringify(url));

    return this.http.get(url);
  }
  
  retornarPessoaDetalhada(id: string): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id));
  }

  retornarTodasPessoasSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH);
  }

  salvarNovaPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, pessoa);
  }

  atualizarPessoa(id: string, pessoa: Pessoa): Observable<any> {
    return this.http.put(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id), pessoa);
  }

  excluirPessoa(id: string): Observable<any> {
    return this.http.delete(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id))
  }
}
