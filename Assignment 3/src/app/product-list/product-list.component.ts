import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  addToCart(item: Product): void {
    this.cartService.addItemToCart(item);
    console.log(this.cartService.numberOfItemInCart());
  }
}
