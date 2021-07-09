import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  namepage ='home';
  name='Thanachai Banpan';
  appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shopping Cart', url: '/cart', icon: 'cart' },
    { title: 'Settings', url: '/setting', icon: 'settings' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];

  category = [
    { title: 'Hat'},
    { title: 'Shirt'},
    { title: 'Shoes'},
    { title: 'Sandals'}
  ];
  productData: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProductData().subscribe((res:any) => {

      this.productData = res.data
      // console.log(this.productData)
    })

  }

}
