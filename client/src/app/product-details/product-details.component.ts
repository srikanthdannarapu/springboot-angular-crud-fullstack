import { ProductsServiceService } from './../products-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router,
    private productsServiceService: ProductsServiceService) {

   }

  ngOnInit() {
    this.product = new Product(0,"", 0, 0);
    this.id = this.route.snapshot.params['id'];
    this.productsServiceService.getProductById(this.id)
    .subscribe(data => {
      console.log(data);
      this.product = data;
    }, error => console.log(error))
  }

  list() {
    this.router.navigate(['list']);
  }
}
