import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private alumnoservice:AlumnosService,
    private toastController:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2300,
      position: 'bottom'
    });
    toast.present
  }

  addAlumno(nombre: any, carrera: any, seccion:any, imagen: any){
    this.alumnoservice.addAlumno(nombre.value, carrera.value, seccion.value, imagen.value);
    this.mensajeToast("Alumno Agregado!");
    this.router.navigate(['/alumno'])
  }

}