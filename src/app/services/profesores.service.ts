import { Injectable } from '@angular/core';
import { PrefesoresPage } from '../pages/prefesores/prefesores.page';
import { Profesores } from '../pages/prefesores/prefesores.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  profesor: Profesores[]=[
    {
      id: '1',
      nombre: 'Carlos Zapata', 
      imagen: 'https://www.aprendemas.com/co/blog/images/2021/10/profesor_mal_tips.jpg'
    },
    {
      id: '2',
      nombre: 'Pedro Armadas', 
      imagen: 'https://www.aprendemas.com/co/blog/images/2021/10/profesor_mal_tips.jpg'
    },
    {
      id: '3',
      nombre: 'Clara Muñoz',
      imagen: 'https://www.aprendemas.com/co/blog/images/2021/10/profesor_mal_tips.jpg'
    }


  ]

  constructor() { }
  getAll(){
    return[...this.profesor]
  }

  getProfesor(id: string){
    return{
      ...this.profesor.find(aux => {
        return aux.id === id
      })
    }
  }
  addProfesor(nombre:string, imagen:string){
    this.profesor.push({
      nombre,imagen, id: this.profesor.length + 1 + ""
    })
  }
  
  deleteProfesor(id: string) {
    this.profesor = this.profesor.filter( aux => {
      return aux.id !== id
    })
  }
  editarProfesor(profesor: Profesores): boolean {
    const asignaturaExistente = this.profesor.find(j => j.id === profesor.id);

    if (asignaturaExistente) {
      // Actualiza los datos del jugador existente
      asignaturaExistente.nombre = profesor.nombre;
      asignaturaExistente.imagen = profesor.imagen;
      return true; // Indica éxito
    }

    return false; // Indica error (jugador no encontrado)
  }


}
