import { ProductsServiceService } from './../products-service.service';
import { Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-products-list-datatable',
  templateUrl: './products-list-datatable.component.html',
  styleUrls: ['./products-list-datatable.component.css']
})
export class ProductsListDatatableComponent implements OnInit {

  ELEMENT_DATA: Product[];
  id:number;
  product: Product = new Product(0,"", 0 , 0);
  displayColumns: string[] = ['id','name', 'quantity', 'price'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  
  constructor(private productsServiceService: ProductsServiceService,
    private router: Router) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllProducts();
  }

  private getAllProducts() {
    let resp = this.productsServiceService.getAllProducts();
    resp.subscribe(report => {
      this.dataSource.data = report as Product[];
      console.log(this.dataSource.data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
