import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './component/product/product.component';
import {NewProductComponent} from './component/product/new-product/new-product.component';
import {EditProductComponent} from './component/product/edit-product/edit-product.component';

const routes: Routes = [
  {
    path:"product", component:ProductComponent
  },
  {
    path:"newProduct", component:NewProductComponent
  },
  {
    path:"editProduct/:id", component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
