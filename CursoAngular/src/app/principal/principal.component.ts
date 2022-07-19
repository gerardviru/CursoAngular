import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../Models/destino-viaje.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  destinos: DestinoViaje[];
  constructor() { 
    this.destinos = []};

  ngOnInit(): void {

  }

  guardar(nombre:string , url:string): boolean{
    this.destinos.push(new DestinoViaje(nombre , url));
    console.log(this.destinos)
    return false;
  }

}
