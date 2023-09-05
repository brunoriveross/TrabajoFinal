import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  alumno!: Alumnos ;
  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnosService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.alumno = this.alumnoService.getAlumno(aux);
      }
    })
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteAlumno() {
    const alert = await this.alertController.create({
      header: 'Eliminar Alumno',
      message: 'Estás seguro de que desea eliminar este Alumno?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            if (this.alumno && this.alumno.id !== undefined) {
              this.alumnoService.deleteAlumno(this.alumno.id)
              this.mensajeToast('Alumno Eliminado!');
              this.router.navigate(['/alumno'])
            } else {
              this.mensajeToast('ERROR: Alumno no definido');
            }
          }
        },
        {
          text: 'No',
          handler: () => {
            this.mensajeToast('Acción cancelada!');
          }
        }
      ]
    });
    await alert.present();
    let resultado = await alert.onDidDismiss();
  }
  editarAlumno(alumno: Alumnos) {
    console.log(alumno.id)
    this.router.navigate(['/editara', alumno.id]);
  }
}
