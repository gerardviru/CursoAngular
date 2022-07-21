import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: PrincipalComponent},
  { path: 'destino', component: DestinoDetalleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DestinoViajeComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
