import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../Models/destino-viaje.model';
import { DestinosApiClient } from '../Models/destinosApiClient.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];

  constructor(public destinosApiClient: DestinosApiClient) { 
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if (d != null) {
        this.updates.push('Se ha elegido a' + d.nombre);
      }
    });
  }

  ngOnInit() {

  }

  agregado(d: DestinoViaje ) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(d: DestinoViaje) {
    this.destinosApiClient.elegir(e);
    
  }

}
