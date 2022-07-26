import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  ValidatorFn,  Validators } from '@angular/forms';
import { DestinoViaje } from '../Models/destino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {

  @Output() onItemAdded:EventEmitter<DestinoViaje>;
  fg:FormGroup;
  minlongitud=3 ;
  searchResults: string[] = [];

  constructor() {
    this.onItemAdded=new EventEmitter();
    this.fg =fb.group({nombre :['', Validators.compose([Validators.required,this.nombreValidatorParametrizable(this.minlongitud)])] , url:['']});
   }

  ngOnInit() {
    let elemNombre= <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
    .pipe
    (
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length>2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(() => ajax('/assets/datos.json'))
    ).subscribe(AjaxResponse => {
      console.log();
      this.searchResults = AjaxResponse.response;
    });
  }

  guardar(nombre:string ,url:string):boolean
  {
    const d =new DestinoViaje (nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control:FormGroup):{ [s:string] :boolean}
  {
    const l = control.value.toString().trim().length;
    if (l>0 && l<5) {
      return {invalidNombre :true };
    }
    return {invalidNombre:false };
  }

  nombreValidatorParametrizable(minlongitud:number):ValidatorFn
  {
    return (control:FormControl): { [s:string]:boolean } | null => {
      const l = control.value.toString().trim().length;
      if (l>0 && l<minlongitud) 
      {
        return {invalidNombre :true };
      }
        return null;
    }
  }
}
