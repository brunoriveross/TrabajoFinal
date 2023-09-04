import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from './asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  listaAsignaturas: Asignatura[] = [];

  constructor(
    private router:Router,
    private asignaturaservice: AsignaturasService) { }

  ngOnInit() {
    this.listaAsignaturas = this.asignaturaservice.getAll();
  }

  ionViewWillEnter() {
    this.listaAsignaturas = this.asignaturaservice.getAll();
  }

  detalle() {
    this.router.navigate(['detalle']);
  }

  addAsignatura() {
    this.router.navigate(['/agregar']);
  }

  listar() {
    this.listaAsignaturas = this.asignaturaservice.getAll();
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarAsiganatura(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() != '') {
      this.listaAsignaturas = this.listaAsignaturas.filter((aux: any) => {
        // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    } else {
      this.listar();
    }
  }
    
}
