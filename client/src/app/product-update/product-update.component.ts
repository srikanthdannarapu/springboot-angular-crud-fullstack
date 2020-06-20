import { ProductsServiceService } from './../products-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: number;
  product: Product;
  constructor(private route: ActivatedRoute, private router: Router,
    private productsServiceService: ProductsServiceService) { }

  ngOnInit() {
    this.product = new Product(0,"", 0 , 0);
    console.log("loading update page");
    this.id = this.route.snapshot.params['id'];

    this.productsServiceService.getProductById(this.id)
    .subscribe(data => {
      console.log(data);
      this.product = data;
    }, error => console.log(error));
    }

    public updateProduct() {
      this.productsServiceService.updateProduct(this.product)
      .subscribe(data => this.product = data, error => console.log(error));
      this.gotoList();
    }

    onSubmit() {
      this.updateProduct();
    }
    gotoList() {
      this.router.navigate(['/list']);
    }

  }

