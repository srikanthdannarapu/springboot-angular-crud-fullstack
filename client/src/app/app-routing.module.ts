import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListDatatableComponent } from './products-list-datatable/products-list-datatable.component';


const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  { path:'login', component: LoginComponent},
  { path:'home', component: ProductsHomeComponent},
  { path:'product', component: ProductsFormComponent},
  { path:'list', component: ProductsListComponent},
  { path:'details/:id', component: ProductDetailsComponent},
  { path:'update/:id', component: ProductUpdateComponent},
  { path:'listDatatable', component: ProductsListDatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
