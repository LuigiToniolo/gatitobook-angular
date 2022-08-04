import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

//Interagindo com o back-end:

  constructor(private httpClient: HttpClient) {  }

  //Observable -> objeto que quando a requisição completar, ele vai retornar um objeto dentro de onde a gente está mandando

  autenticar(usuario:string, senha: string):Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login', { //Endereço da api
      userName: usuario,
      password: senha,
    })
  }

}
