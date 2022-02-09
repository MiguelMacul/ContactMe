import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { AddContactPageRoutingModule } from '../../contact/add-contact/add-contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule, 
    ReactiveFormsModule,
    AddContactPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
