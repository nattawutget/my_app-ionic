import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  segment = "segment value";
  itemTab = [
    { title: 'รายละเอียดสินค้า',url: '/productdetail'},
    { title: 'คะแนนสินค้า',url: '/review' },
    { title: 'รีวิวสินค้า' },
    { title: 'รีวิวร้านค้า' }];
    
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
   
  }

}
