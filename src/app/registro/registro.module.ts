import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPage } from './registro.page';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroPageRoutingModule } from './registro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RegistroPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}

