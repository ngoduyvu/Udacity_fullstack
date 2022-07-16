import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  quantity: number;
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService: CartService) {
    this.quantity = 0;
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      quantity: 0,
      description: '' 
    }
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.product.quantity = this.quantity;
    //this.cartService.addItemToCart(this.product);
    this.addToCart.emit(this.product);
  }
}
