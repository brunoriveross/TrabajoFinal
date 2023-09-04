import { Injectable } from '@angular/core';
import { Asignatura } from '../pages/asignaturas/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  
  asignaturas: Asignatura[] = [
    {
      id: '1',
      nombre: 'APP movil',
      seccion: '001D',
      imagen: 'https://i.ytimg.com/vi/p2IFIGChjRg/maxresdefault.jpg'
    },
    {
      id: '2',
      nombre: 'Matematicas',
      seccion: '001D',
      imagen: 'https://i.ytimg.com/vi/p2IFIGChjRg/maxresdefault.jpg'
    },
    {
      id: '3',
      nombre: 'Ingles',
      seccion: '001D',
      imagen: 'https://i.ytimg.com/vi/p2IFIGChjRg/maxresdefault.jpg'
    }

  ]

  constructor() { }

  getAll(){
    return[...this.asignaturas]
  }

  getAsignatura(id: string){
    return{
      ...this.asignaturas.find(aux => {
        return aux.id === id
      })
    }
  }

  addAsignatura(nombre:string, seccion:string, imagen:string){
    this.asignaturas.push({
      nombre, seccion, imagen, id: this.asignaturas.length + 1 + ""
    })
  }
  
  deleteAsignatura(id: string) {
    this.asignaturas = this.asignaturas.filter( aux => {
      return aux.id !== id
    })
  }



}
