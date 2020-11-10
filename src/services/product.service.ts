import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'any'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  fetchProducts(page){
    return this.http.get<any>(`${environment.ENDPOINT}products?page=${page}`);
  }
  getProductById(id){
    return this.http.get<any>(`${environment.ENDPOINT}products/${id}`);
  }
}
