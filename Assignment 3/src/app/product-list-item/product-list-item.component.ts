import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  quantity: number;
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor() {
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

  submitProduct(): void {
    this.addToCart.emit(this.product);
  }
}
