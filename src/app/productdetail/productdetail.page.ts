import { Component, OnInit } from '@angular/core';
import { DataService, HomeTab } from '../data.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

   menu = '';
  

  // itemTab: Array<any> = [
  // { title: 'Overview' },
  // { title: 'Related' },
  // { title: 'Product Reviews' },
  // { title: 'Store Reviews' }];

  data: Array<HomeTab> = [];
  liked = false;
  constructor( 
    private dataService: DataService
   ) { this.data = dataService.item_menu;
       this.menu = this.data[0].title;

}

  ngOnInit() {
    
  }
 
}
