import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(private router: Router) {}

  redirectToAgregarProfesor() {
    this.router.navigate(['agregar-profesor']);
  }

  redirectToListarProfesor() {
    this.router.navigate(['listar-profesor']);
  }

  redirectToAgregarAlumno() {
    this.router.navigate(['agregar-alumno']);
  }

  redirectToListarAlumno() {
    this.router.navigate(['listar-alumno']);
  }

  redirectToAgregarUser() {
    this.router.navigate(['agregar-user']);
  }

  redirectToListarUser() {
    this.router.navigate(['listar-user']);
  }

  ngOnInit() {
  }

}