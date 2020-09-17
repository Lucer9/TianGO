import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewhomePageRoutingModule } from './newhome-routing.module';

import { NewhomePage } from './newhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewhomePageRoutingModule
  ],
  declarations: [NewhomePage]
})
export class NewhomePageModule {}
