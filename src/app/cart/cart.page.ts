import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  namepage ='shoppingcart';
  name='Thanachai Banpan';
  cart :any;
  appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shopping Cart', url: '/home', icon: 'cart' },
    { title: 'Settings', url: '/setting', icon: 'settings' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];

  constructor(private menu: MenuController,
              private cartService:CartService,

    ) { }


  ngOnInit() {
    this.cartService.getCartProduc().subscribe((res:any)=>{
      console.log(res)
      this.cart = res.data
      console.log(this.cart)
    })

  }

  



}
