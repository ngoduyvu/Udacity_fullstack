import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;
  fullName: string = '';
  paymentId: string = '';
  shippingAddress: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemsCart();
    this.total = this.cartService.numberOfItemInCart();
  }

  emptyCartItem(): void {
    this.cartService.emptyInCart();
    this.total = this.cartService.numberOfItemInCart();
    this.cartItems = [];
  }

  addToCart(item: Product): void {
    this.cartService.addItemToCart(item);
    this.cartItems = this.cartService.getItemsCart();
    this.total = this.cartService.numberOfItemInCart();
  }
}
