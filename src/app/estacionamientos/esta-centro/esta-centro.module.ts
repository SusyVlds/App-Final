import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstaCentroPageRoutingModule } from './esta-centro-routing.module';

import { EstaCentroPage } from './esta-centro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstaCentroPageRoutingModule
  ],
  declarations: [EstaCentroPage]
})
export class EstaCentroPageModule {}
