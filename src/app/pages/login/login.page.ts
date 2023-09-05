import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasenia: string = '';

  constructor(
    private router: Router,
    private usuarioService: UserService,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  login() {
    const esValido = this.usuarioService.validarInicioSesion(this.usuario, this.contrasenia);

    if (esValido) {
      this.mensajeToast("Bienvenido al Sistema!");
      this.router.navigate(['home']);
    } else {
      this.mensajeToast("Credenciales incorrectas");
    }
  }
}
