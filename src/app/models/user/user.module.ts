import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule { 
  iduser: number=0;
  primerNombre: string="";
  apellidos: string="";
  email: string="";
  password: string="";
}
