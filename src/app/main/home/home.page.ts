import { Component, OnInit } from '@angular/core';

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
    { title: 'Shopping Cart', url: '', icon: 'cart' },
    { title: 'Settings', url: '/setting', icon: 'settings' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];

  category = [
    { title: 'Hat'},
    { title: 'Shirt'},
    { title: 'Shoes'},
    { title: 'Sandals'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
