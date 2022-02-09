import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactoModule { 
  id: number=0;
  iduser: number=0;
  nombre: string='';
  imagen: string='';
  correos: string[]=[];
  telefonos: string[]=[];
  fechanacimiento: string='';
}
