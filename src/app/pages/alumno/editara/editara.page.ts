import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-editara',
  templateUrl: './editara.page.html',
  styleUrls: ['./editara.page.scss'],
})
export class EditaraPage implements OnInit {

 alumno: Alumnos = {
    id: '', 
    nombre: '',
    carrera: '',
    seccion: '',
    imagen: ''
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alumnooService : AlumnosService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const AlumnosId = this.route.snapshot.paramMap.get('id');

  if (AlumnosId !== null) {
    this.alumno = this.alumnooService.getAlumno(AlumnosId);
  } 
  }
  editarAlumno() {
    if (this.alumno ) { 
      this.alumnooService.editarAlumno(this.alumno );
      this.mensajeToast("alumno modificado correctamente");
      this.router.navigate(['/alumno', this.alumno .id]);
    } else {
      this.mensajeToast("alumno no se pudo modificar.");
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
