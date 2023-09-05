import { Component, OnInit } from '@angular/core';
import { Profesores } from './prefesores.model';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-prefesores',
  templateUrl: './prefesores.page.html',
  styleUrls: ['./prefesores.page.scss'],
})
export class PrefesoresPage implements OnInit {

  listaProfesores : Profesores[]=[];

  constructor(
    private router:Router,
    private profesoresservice: ProfesoresService ) { }

    ngOnInit() {
      this.listaProfesores = this.profesoresservice.getAll();
    }
  
    detalle() {
      this.router.navigate(['detalle']);
    }

    ionViewWillEnter() {
      this.listaProfesores = this.profesoresservice.getAll();
    }
    addProfesor() {
      this.router.navigate(['/agregarp']);
    }
  
    listar() {
      this.listaProfesores = this.profesoresservice.getAll();
    }
  
    handleRefresh(event: any) {
      setTimeout(() => {
        this.listar();
        event.target.complete();
      }, 2000);
    }
  
    buscarProfesores(event: any) {
      const texto = event.target.value;
      if (texto && texto.trim() != '') {
        this.listaProfesores = this.listaProfesores.filter((aux: any) => {
          // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
          return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
        })
      } else {
        this.listar();
      }
    }
}
