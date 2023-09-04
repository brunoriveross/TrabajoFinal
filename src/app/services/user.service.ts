import { Injectable } from '@angular/core';
import { Usuario } from '../pages/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarios: Usuario[]=[
    {
      id: '1',
      usuario: 'Bruno Riveros',
      contrasenia: '1234',
      tipo: 'Estudiante'
    },
    {
      id: '2',
      usuario: 'Francisco Juillet',
      contrasenia: '1234',
      tipo: 'Docente'
    }
  ]

  constructor() { }

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
