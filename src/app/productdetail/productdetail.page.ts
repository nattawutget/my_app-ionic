import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  
  itemTab = [
  { title: 'รายละเอียดสินค้า' },
  { title: 'คะแนนสินค้า' },
  { title: 'รีวิวสินค้า' },
  { title: 'รีวิวร้านค้า' }];

  productData:any;
  liked = false;

  constructor(private dataService: DataService) { 

}

ngOnInit() {
  this.dataService.getProductData().subscribe((res)=>{
    console.log(res)
    this.productData = res
    console.log(this.productData)
    
  })

}

 
like() {
  console.log('like')
  this.liked = !this.liked;
}
}
