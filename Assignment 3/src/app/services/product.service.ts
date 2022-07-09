import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data.json");
  };

  getProductsTest() {
    return [
      {
        id: 1,
        name: 'Pandas',
        price: 1000,
        url: 'www.google.com',
        quantity: 3,
        description: 'This is test 1' 
      },
      {
        id: 2,
        name: 'Elephant',
        price: 9000,
        url: 'www.yandex.com',
        quantity: 2,
        description: 'This is test 2' 
      }
    ]
  }

  // getProductById(id: number): Observable<Product> {
  //   return this.getProducts().pipe((map(products => products.filter(product => product.id === id)[0])));
  // } 
}
