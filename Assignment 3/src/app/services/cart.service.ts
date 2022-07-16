import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Product[] = [];
  public cartSize: BehaviorSubject<number> = new BehaviorSubject<number>(this.numberOfItemInCart());

  constructor() { }

  getItemsCart() {
    return this.shoppingCart;
  }

  addItemToCart(product: Product) {
    let added: boolean = false;
    this.shoppingCart.forEach(item => {
      if(item.id == product.id ) {
        item.quantity += product.quantity;
        added = true;
      }
    });
    if (!added) {
      this.shoppingCart.push(product);
      //alert('New Items are added to your cart!');
      alert(this.shoppingCart.length);
    };
  }

  numberOfItemInCart() : number {
    let amount: number = 0;
    this.shoppingCart.forEach(item => {
      amount += item.quantity;
    });
    return amount;
  }

  emptyInCart(): void {
    this.shoppingCart = [];
    alert('Your cart was cleared!');
  }
}
