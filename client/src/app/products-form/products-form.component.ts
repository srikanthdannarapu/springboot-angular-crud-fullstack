import { Product } from './../product.model';
import { ProductsServiceService } from './../products-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  product: Product = new Product(0,"",0,0);
  error: any;
  showSuccessMessage: boolean = false;
  showFailureMessage: boolean = false;

  constructor(private productsServiceService: ProductsServiceService,
    private router: Router) {
      
     }

  ngOnInit() {
  }

  public addProduct() {
    let response = this.productsServiceService.addProduct(this.product);
    response.subscribe(data => this.product = data, error => this.error = error);
    if(this.error != null){
      this.showFailureMessage = false;
    } else {
      this.showSuccessMessage = true;
    }
  }
}
