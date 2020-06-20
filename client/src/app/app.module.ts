import { ProductsServiceService } from './products-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListDatatableComponent } from './products-list-datatable/products-list-datatable.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsListDatatableComponent,
    ProductsListComponent,
    ProductsFormComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    ProductsHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    ProductsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
