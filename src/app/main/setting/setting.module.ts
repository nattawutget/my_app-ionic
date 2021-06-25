import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';
import { HomePage } from '../home/home.page';
import { HomePageModule } from '../home/home.module'; //เรียกใช้ component--




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,
    HomePageModule //เรียกใช้ component--
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
