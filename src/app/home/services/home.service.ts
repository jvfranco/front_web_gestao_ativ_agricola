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

  constructor(
    private http: HttpClient
  ) { }

  retornarOcorrenciasSemPaginacaoo(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH);
  }
}
