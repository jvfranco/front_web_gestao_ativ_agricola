import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Paginacao } from 'src/app/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly PATH: string = 'ocorrencia';
  private readonly GET_ALL_PATH: string = '/todos';

  constructor(
    private http: HttpClient
  ) { }

  retornarOcorrenciasSemPaginacaoo(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH);
  }

  retornarTodasOcorrencias(paginacao: Paginacao): Observable<any> {
    let url = env.baseUrl + this.PATH + this.GET_ALL_PATH;

    if (paginacao != null) {
      url = url + '?page=' + paginacao.page + '&size=' + paginacao.size + '&sort=' + paginacao.sort + '&direction=' + paginacao.direction;
    } 

    console.log('Serviço'+JSON.stringify(url));

    return this.http.get(url);
  }
}
