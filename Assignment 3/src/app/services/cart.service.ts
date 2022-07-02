import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shoppingCart: Product[] = [];

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
      alert('New Items are added to your cart!');
    };
  }

  numberOfItemInCart() : number {
    let amount: number = 0;
    this.shoppingCart.forEach(item => {
      amount += 1;
    });
    return amount;
  }

  emptyInCart(): void {
    this.shoppingCart = [];
    alert('Your cart was cleared!');
  }
}
