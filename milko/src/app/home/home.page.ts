import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

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
  	imgUrl: "milk.jpg",
    count: 0
  }, {
  	name: "Curd",
  	qty: "500 ml",
  	price: 70,
  	desc: "Freshly prepared from Organic A2 Milk.",
  	imgUrl: "curd.jpg",
    count: 0
  }, {
  	name: "Ghee",
  	qty: "500 gms",
  	price: 250,
  	desc: "Prepared from fresh Organic A2 Milk. No preservatives added.",
  	imgUrl: "ghee.jpg",
    count: 0
  }];

  order = {
    total: 0,
    items:[]
  };

  constructor(private router: Router) {
  }

  add(item){
    if(item.count < 5){
      item.count ++;
      this.order.total += item.price;
    }
  }

  remove(item){
    if(item.count > 0){
      item.count --;
      this.order.total -= item.price;
    }
  }

  goCarting(){

    this.order.items = [];

    for (let item of this.items) {
       if(item.count > 0){
         this.order.items.push(item);
       }
    }

  	console.log("Total :" + this.order.total);
    let navigationExtras: NavigationExtras = {
      state: {
        order: this.order
      }
    };
  	this.router.navigateByUrl('/order', navigationExtras);
  }
}
