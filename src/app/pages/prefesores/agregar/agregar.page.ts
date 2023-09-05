import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private toastController:ToastController,
    private router:Router,
    private profesorService : ProfesoresService
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

  addProfesor(nombre: any,imagen: any){
    this.profesorService.addProfesor(nombre.value, imagen.value);
    this.mensajeToast("Profesor Agregado!");
    this.router.navigate(['/prefesores'])
  }

}
