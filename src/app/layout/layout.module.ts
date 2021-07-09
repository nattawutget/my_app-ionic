import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';
import { LayoutPage } from './layout.page';



@NgModule({
  declarations:[LayoutPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule
  ],
  exports:[LayoutPage]
 
})
export class LayoutPageModule {}
