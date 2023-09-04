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
}
