import { Component, OnInit } from '@angular/core';
import { Profesores } from '../prefesores.model';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editarp',
  templateUrl: './editarp.page.html',
  styleUrls: ['./editarp.page.scss'],
})
export class EditarpPage implements OnInit {

  profesor: Profesores = {
    id: '', 
    nombre: '',
    imagen: ''
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profesorService : ProfesoresService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const profeId = this.route.snapshot.paramMap.get('id');

  if (profeId !== null) {
    this.profesor = this.profesorService.getProfesor(profeId);
  } 
  }
  editarProfesor() {
    if (this.profesor) { 
      this.profesorService.editarProfesor(this.profesor);
      this.mensajeToast("Profesor modificado correctamente");
      this.router.navigate(['/prefesores', this.profesor.id]);
    } else {
      this.mensajeToast("PROFE no se pudo modificar.");
    }
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
