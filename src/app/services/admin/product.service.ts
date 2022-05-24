import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any = [];

  constructor(private http: HttpClient, private as: AuthService) { }

  saveProduct(payload: any) {
    this.products.push(payload);
    console.log(this.products);
    return true;
    //return this.http.post(environment.apiUrl + 'products/add', payload, this.as.generateHttpHeader());
  }
}
