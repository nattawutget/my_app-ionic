import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProductdetailPageRoutingModule } from './productdetail-routing.module';
import { LayoutPageModule } from '../layout/layout.module';
import { ProductdetailPage } from './productdetail.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailPageRoutingModule,
    LayoutPageModule
  ],
  declarations: [ProductdetailPage]
})
export class ProductdetailPageModule {}
