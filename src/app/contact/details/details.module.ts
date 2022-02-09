import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import { BrowserModule } from '@angular/platform-browser'
import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
