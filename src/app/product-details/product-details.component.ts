import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService:ProductService) { }
  public isFetched = false;
  public product:any = {};
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.productService.getProductById(params.id).subscribe((payload) => {
        console.log(payload);
        this.isFetched = true;
        this.product = payload;
      })
    });
  }

}
