import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9191/';
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  constructor(private httpClient: HttpClient) {

  }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(`${baseUrl}/products`);
  }

  public getProductById(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}/productById/${id}`);
  }

  public addProduct(product: Product): Observable<any> {
    console.log(product);
    return this.httpClient.post(`${baseUrl}/product`, product);
  }

  public updateProduct(product: Product): Observable<any>  {
    return this.httpClient.put(`${baseUrl}/product`, product);
  }

  public deleteProduct(id: number):Observable<any> {
    return this.httpClient.delete(`${baseUrl}/delete/${id}`);
  }


  public findProductByName(name: string) {
    return this.httpClient.get(`${baseUrl}/products/${name}`);
  }
}
