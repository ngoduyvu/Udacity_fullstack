import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: Product[] = [];
  @Input() product: Product;
  
  constructor() { 
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

}
