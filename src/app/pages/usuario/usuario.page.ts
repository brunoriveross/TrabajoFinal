import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  listaUsuarios: Usuario[]=[];

  constructor() { }

  ngOnInit() {
  }

}
