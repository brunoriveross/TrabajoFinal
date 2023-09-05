import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartaadmin',
  templateUrl: './cartaadmin.component.html',
  styleUrls: ['./cartaadmin.component.scss'],
})
export class CartaadminComponent  implements OnInit {
  @Input() titulo!: string;
  @Input() tipo!: string;
  @Input() imagen!: string;
  @Input() mostrarBoton: boolean = false;
  @Input() mostrarBoton2: boolean = false;
  @Input() mostrarBoton3: boolean = false;
  @Input() mostrarBoton4: boolean = false;
  constructor() { }

  ngOnInit() {}

}
