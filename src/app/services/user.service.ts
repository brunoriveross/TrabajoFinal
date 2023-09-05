import { Injectable } from '@angular/core';
import { Usuario } from '../pages/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarios: Usuario[]=[
    {
      id: '1',
      usuario: 'bruno',
      contrasenia: '1234'
    },
    {
      id: '2',
      usuario: 'Francisco Juillet',
      contrasenia: '1234'
    }
  ]

  constructor() { }

  validarInicioSesion(usuario: string, contrasenia: string): boolean {
    const usuarioEncontrado = this.usuarios.find(user => user.usuario === usuario && user.contrasenia === contrasenia);
    return !!usuarioEncontrado;
  }

  getAll(){
    return[...this.usuarios]
  }

  getProfesor(id: string){
    return{
      ...this.usuarios.find(aux => {
        return aux.id === id
      })
    }
  }

  getUser(user: string, pass: string) {
    return {
      ...this.usuarios.find(aux => {
        return aux.usuario === user && aux.contrasenia === pass
      })
    }
  }
}
