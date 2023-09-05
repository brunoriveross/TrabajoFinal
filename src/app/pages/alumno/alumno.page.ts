import { Component, OnInit } from '@angular/core';
import { Alumnos } from './alumno.model';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  listaAlumnos : Alumnos[]=[];

  constructor(
    private router:Router,
    private alumnoservice: AlumnosService ) { }

    ngOnInit() {
      this.listaAlumnos = this.alumnoservice.getAll();
    }
  
    detalle() {
      this.router.navigate(['detalle']);
    }

    ionViewWillEnter() {
      this.listaAlumnos = this.alumnoservice.getAll();
    }
    addAlumno() {
      this.router.navigate(['agregarAlumno']);
    }
  
    listar() {
      this.listaAlumnos = this.alumnoservice.getAll();
    }
  
    handleRefresh(event: any) {
      setTimeout(() => {
        this.listar();
        event.target.complete();
      }, 2000);
    }
  
    buscarAlumno(event: any) {
      const texto = event.target.value;
      if (texto && texto.trim() != '') {
        this.listaAlumnos = this.listaAlumnos.filter((aux: any) => {
          // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
          return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
        })
      } else {
        this.listar();
      }
    }
}