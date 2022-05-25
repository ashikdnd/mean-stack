import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any = [];

  constructor(private http: HttpClient, private as: AuthService) {
    this.products = JSON.parse(<string>localStorage.getItem('products'));
  }

  saveProduct(payload: any) {
    this.products.push(payload);
    localStorage.setItem('products', JSON.stringify(this.products));
    console.log(this.products);
    return true;
    //return this.http.post(environment.apiUrl + 'products/add', payload, this.as.generateHttpHeader());
  }

  updateProduct(payload: any) {
    console.log(payload);
    const filter = this.products.filter((f: any) => {
      if(f.name == payload.name) {
        f.color = payload.color;
        f.description = payload.description;
        f.price = payload.price;
      };
      return f;
    });
    this.products = filter;
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  getProducts() {
    return JSON.parse(<string>localStorage.getItem('products'));
  }
}
