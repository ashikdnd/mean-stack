import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../auth.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any = [];
  productUpdate: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private as: AuthService) {
    this.products = JSON.parse(<string>localStorage.getItem('products'));
  }

  saveProduct(payload: any) {
    if (!this.products) {
      this.products = [];
    }
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
    localStorage.setItem('products', JSON.stringify(this.products));
    this.productUpdate.next({});
  }

  getProducts() {
    return JSON.parse(<string>localStorage.getItem('products'));
  }
}
