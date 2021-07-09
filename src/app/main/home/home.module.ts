import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SettingPage } from '../setting/setting.page';
import { SideMenuPageModule } from 'src/app/side-menu/side-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SideMenuPageModule
  ],
  declarations: [HomePage],
  exports:[HomePage]   //เรียกใช้ component--
})
export class HomePageModule {}
