import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Location} from '@angular/common';



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

  condition: number = 0;
  list: any[] = new Array(5);

  productData:any;
  liked = false;

  constructor(private dataService: DataService,private _location: Location) { 

}
  // itemTab: Array<any> = [
  // { title: 'Overview' },
  // { title: 'Related' },
  // { title: 'Product Reviews' },
  // { title: 'Store Reviews' }];

 

ngOnInit() {
  this.dataService.getProductData().subscribe((res:any)=>{
    console.log(res)
    this.productData = res.data
    console.log(this.productData)
    
  })

}
backClicked() {
  this._location.back();
}
 
like() {
  console.log('like')
  this.liked = !this.liked;
}
  
review(i) {
  this.condition = i + 1;
}


}
