import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'book' },
    { title: 'Profesores', url: 'prefesores', icon: 'person' },
    { title: 'Alumnos', url: 'alumno', icon: 'people' },
    { title: 'Escanear QR', url: 'qr', icon: 'qr-code' },
    { title: 'Administrador', url: '/administrador', icon: 'people-circle' },
    { title: 'Cerrar Session ', url: 'login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
