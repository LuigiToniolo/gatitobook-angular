import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

//Interagindo com o back-end:

    constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) {  }

  //Observable -> objeto que quando a requisição completar, ele vai retornar um objeto dentro de onde a gente está mandando

  autenticar(usuario:string, senha: string):Observable<HttpResponse<any>> {
    return this.httpClient.post(`${API}/user/login`, { //Endereço da api
      userName: usuario,
      password: senha,
    },
      {
        observe: 'response' //--> Além do body, também queremos o header da requisição
      }
    ).pipe(
     tap((res) => {
      const authToken = res.headers.get('x-access-token') ?? '';
      this.usuarioService.salvaToken(authToken);
     }) 
    )
  }

}
