import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products = [];
  public currentPage = 1;
  constructor(private productService:ProductService) {
    this.productService.fetchProducts(this.currentPage).subscribe((payload) => {
      payload.forEach((item) => {
        let count = item.reviews.length;
        let total = 0;
        item.reviews.forEach((e) => {
          total += e.rating;
        })
        item.avg = total/ count;
        item.avg.toFixed(1);
        this.products.push(item);
      });
    })
  }

  ngOnInit(): void {
  }

  next(){
  this.currentPage ++;
  this.products = [];
  this.productService.fetchProducts(this.currentPage).subscribe((payload) => {
    payload.forEach((item) => {
      let count = item.reviews.length;
      let total = 0;
      item.reviews.forEach((e) => {
        total += e.rating;
      })
      item.avg = total/ count;
      item.avg.toFixed(1);
      this.products.push(item);
    });
  });
  }

  previous(){
  this.currentPage --;
    this.products = [];
    this.productService.fetchProducts(this.currentPage).subscribe((payload) => {
      payload.forEach((item) => {
        let count = item.reviews.length;
        let total = 0;
        item.reviews.forEach((e) => {
          total += e.rating;
        })
        item.avg = total/ count;
        item.avg.toFixed(1);
        this.products.push(item);
      });
    });
  }

}
