import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  total = 0;

  items = [{
  	name: "Milk",
  	qty: "500 ml",
  	price: 60,
  	desc: "Fresh Milk from A2 cows",
  	imgUrl: "milk.jpg"
  }, {
  	name: "Curd",
  	qty: "500 ml",
  	price: 70,
  	desc: "Freshly prepared from Organic A2 Milk.",
  	imgUrl: "curd.jpg"
  }, {
  	name: "Ghee",
  	qty: "500 gms",
  	price: 250,
  	desc: "Prepared from fresh Organic A2 Milk. No preservatives added.",
  	imgUrl: "ghee.jpg"
  }];

  constructor(private router: Router) {
  }

  addToCart(item){
  	this.total += item.price;
  	console.log("Total :" + this.total);
  	this.router.navigateByUrl('/order');
  }
}
