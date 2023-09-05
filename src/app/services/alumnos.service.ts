import { Injectable } from '@angular/core';
import { AlumnoPage } from '../pages/alumno/alumno.page';
import { Alumnos } from '../pages/alumno/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumno: Alumnos[]=[
    {
      id: '1',
      nombre: 'Bastian Guerrero', 
      carrera: 'Analista Programador',
      seccion: '001D',
      imagen: 'https://uchile.cl/.imaging/default/dam/imagenes/Uchile/imagenes-noticias/175158_1_dii-01-l-1_L/jcr:content.jpg'
    },
    {
      id: '2',
      nombre: 'Pedro Sepulveda',
      carrera: 'Ing. Conectividad y Redes',
      seccion: '002D',
      imagen: 'https://media.licdn.com/dms/image/C4E03AQFSDJM1q1g7uQ/profile-displayphoto-shrink_800_800/0/1608240388989?e=2147483647&v=beta&t=RBHEuJxumUKzpE5aYVwsYG4TaH85b99QFbe0dYZRx1c'
    },
    {
      id: '3',
      nombre: 'Andrea Muñoz',
      carrera: 'Derecho',
      seccion: '003D',
      imagen: 'https://c.superprof.com/i/a/4231173/1997549/600/20230223210610/estudiante-geografia-ciencias-sociales-ofrece-clases-estudiantes-primario-secundario.jpg'
    }

  ]

  constructor() { }
  getAll(){
    return[...this.alumno]
  }

  getAlumno(id: string){
    return{
      ...this.alumno.find(aux => {
        return aux.id === id
      })
    }
  }
  addAlumno(nombre:string, carrera:string, seccion:string, imagen:string){
    this.alumno.push({
      nombre,carrera,seccion,imagen, id: this.alumno.length + 1 + ""
    })
  }
  
  deleteAlumno(id: string) {
    this.alumno = this.alumno.filter( aux => {
      return aux.id !== id
    })
  }
  editarAlumno(alumno: Alumnos): boolean {
    const asignaturaExistente = this.alumno.find(j => j.id === alumno.id);

    if (asignaturaExistente) {
      // Actualiza los datos del jugador existente
      asignaturaExistente.nombre = alumno.nombre;
      asignaturaExistente.imagen = alumno.carrera;
      asignaturaExistente.imagen = alumno.seccion;
      asignaturaExistente.imagen = alumno.imagen;
      return true; // Indica éxito
    }

    return false; // Indica error (jugador no encontrado)
  }



}