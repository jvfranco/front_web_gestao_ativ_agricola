import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Paginacao } from 'src/app/core';
import { environment as env } from '../../../../environments/environment';
import { Usuario } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly PATH: string = 'usuario';
  private readonly GET_ALL_PATH: string = '/todos';
  private readonly ID_PATH: string = '/{id}';

  constructor(private http: HttpClient) { } 

  retornarTodosUsuarios(paginacao: Paginacao): Observable<any> {
    let url = env.baseUrl + this.PATH + this.GET_ALL_PATH;

    if (paginacao != null) {
      url = url + '?page=' + paginacao.page + '&size=' + paginacao.size + '&sort=' + paginacao.sort + '&direction=' + paginacao.direction;
    } 

    console.log('Serviço'+JSON.stringify(url));

    return this.http.get(url);
  }
  
  retornarUsuarioDetalhado(id: string): Observable<any> {
    return this.http.get(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id));
  }

  salvarNovoUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, usuario);
  }

  atualizarUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id), usuario);
  }

  excluirUsuario(id: string): Observable<any> {
    return this.http.delete(env.baseUrl + this.PATH + this.ID_PATH.replace('{id}', id))
  }
}
