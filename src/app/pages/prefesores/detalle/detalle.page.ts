import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Profesores } from '../prefesores.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

profesor!: Profesores;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private profesoresService: ProfesoresService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.profesor = this.profesoresService.getProfesor(aux);
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

  async deleteProfesor() {
    const alert = await this.alertController.create({
      header: 'Eliminar Profesor',
      message: 'Estás seguro de que desea eliminar este Profesor?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            if (this.profesor && this.profesor.id !== undefined) {
              this.profesoresService.deleteProfesor(this.profesor.id)
              this.mensajeToast('Profesor Eliminado!');
              this.router.navigate(['/prefesores'])
            } else {
              this.mensajeToast('ERROR: Profesor no definido');
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
  editarProfesor(profesor: Profesores) {
    console.log(profesor.id)
    this.router.navigate(['/editarp', profesor.id]);
  }
}
