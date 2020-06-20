import { ProductsServiceService } from './../products-service.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Observable<Product[]>;
  removedProduct: any;
  
  constructor(private productsServiceService: ProductsServiceService,
    private router:Router) { }

  ngOnInit() {
    this.getAllProducts();
  }
  public getAllProducts() {
    console.log("getAllproducts");
   this.products = this.productsServiceService.getAllProducts();
   console.log("getAllproducts:::"+this.products)
  }

  public getProductById(id: number) {
    this.router.navigate(['details', id]);
  }

  public deleteProduct(id: number) {
    let resp = this.productsServiceService.deleteProduct(id);
    resp.subscribe(data => {
      console.log(data);
      this.removedProduct = data;
      this.list();
    }, 
    error => console.log(error));
  }

  public updateProduct(id: number, product: Product) {
    this.router.navigate(['update', id, product]);
  }

  list() {
    this.router.navigate(['list']);
  }
}
