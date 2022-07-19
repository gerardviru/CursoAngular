import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DestinoViaje } from '../Models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {

  @Input() destino: DestinoViaje | undefined;
  @Input() nombre: string ="";
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() { }

  ngOnInit() {
  }

}
