import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Asignatura } from '../asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})

export class EditarPage implements OnInit {
  asignatura :Asignatura = {
    id: '', 
    nombre: '',
    seccion:'',
    imagen: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private asignaturaService : AsignaturasService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const asignaturaId = this.route.snapshot.paramMap.get('id');

  if (asignaturaId !== null) {
    this.asignatura = this.asignaturaService.getAsignatura(asignaturaId);
  } 
  }
  editarAsignatura() {
    if (this.asignatura) { 
      this.asignaturaService.editarAsignatura(this.asignatura);
      this.mensajeToast("Asignatura modificada correctamente");
      this.router.navigate(['/asignaturas', this.asignatura.id]);
    } else {
      this.mensajeToast("Asignatura no se pudo modificar.");
    }
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}

