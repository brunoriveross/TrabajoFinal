import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.page.html',
  styleUrls: ['./agregar-user.page.scss'],
})
export class AgregarUserPage implements OnInit {

  usuario: string = '';
  contraseña: string = '';
  tipoUsuario: string = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }

  async onSubmit() {
    // Validación básica del lado del cliente
    if (!this.usuario || !this.contraseña || !this.tipoUsuario) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  }
}