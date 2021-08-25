import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private readonly APT_DET_PATH: string = 'apt-atividade-det';

  constructor(
    private http: HttpClient
  ) { }

  retornarTodasAtividadesSemPaginacao(): Observable<any> {
    return this.http.get(env.baseUrl + this.APT_DET_PATH);
  }
}
