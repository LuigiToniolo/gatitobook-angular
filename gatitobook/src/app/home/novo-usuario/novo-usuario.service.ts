import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http:HttpClient) { }

  //Recebe um novo usuário e retorna o observable com sucesso ou falha em relação ao post:

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }
}
