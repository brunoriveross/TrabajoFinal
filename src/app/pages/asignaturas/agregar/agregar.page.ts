import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private asignaturaservice:AsignaturasService,
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

  addAsignatura(nombre: any, seccion: any, imagen: any){
    this.asignaturaservice.addAsignatura(nombre.value, seccion.value, imagen.value);
    this.mensajeToast("Asignatura Agregada!");
    this.router.navigate(['/asignaturas'])
  }

}
