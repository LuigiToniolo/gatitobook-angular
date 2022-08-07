import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({}) // --> toda vez que algum componente faz algum subscribe, ele envia o ultimo dado que estava nele, ou seja, é um observable que guarda estado

  constructor(private tokenService:TokenService) { 
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario; // --> vai representar um usuário
    this.usuarioSubject.next(usuario); //--> Enviar para todos que estão consumindo esse serviço, a informação do usuário
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();  
  }

  logOut(){
    this.tokenService.excluiToken(); //--> irá excluir o token
    this.usuarioSubject.next({}); //--> notificar todos que não tem usuário algum
  }

  estaLogado() {
    return this.tokenService.possuiToken(); //--> vai retornar se ele tem um token
  }
}
