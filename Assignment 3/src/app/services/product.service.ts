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
  
}
