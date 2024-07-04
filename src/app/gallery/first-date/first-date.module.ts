import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstDatePageRoutingModule } from './first-date-routing.module';

import { FirstDatePage } from './first-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstDatePageRoutingModule
  ],
  declarations: [FirstDatePage]
})
export class FirstDatePageModule {}
