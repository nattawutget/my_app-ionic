import { Injectable } from '@angular/core';

export interface HomeTab{
  title: string
};




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

item_menu: Array<HomeTab> = 
[{title: 'รายละเอียดสินค้า'}, 
 {title: 'คะแนนสินค้า'},
 {title: 'รีวิวสินค้า'},
 {title: 'รีวิวร้านค้า'}];
}
