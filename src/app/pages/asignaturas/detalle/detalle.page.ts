import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from '../asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  asignatura!: Asignatura;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private asignaturaService: AsignaturasService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.asignatura = this.asignaturaService.getAsignatura(aux);
      }
    })
  }

  qr() {
    this.router.navigate(['qr']);
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteAsignatura() {
    const alert = await this.alertController.create({
      header: 'Eliminar Asignatura',
      message: 'Estás seguro de que desea eliminar la Asignatura?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            if (this.asignatura && this.asignatura.id !== undefined) {
              this.asignaturaService.deleteAsignatura(this.asignatura.id)
              this.mensajeToast('Asignatura Eliminada!');
              this.router.navigate(['/asignaturas'])
            } else {
              this.mensajeToast('ERROR: Asignatura no definido');
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
  
}