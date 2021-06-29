import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllProductAction, GetSelectedProductAction, SearchProductAction} from '../../../ngrx/product.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private store:Store<any> ,
              private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    this.store.dispatch(new GetAllProductAction({}))
  }

  onGetSelectedProduct() {
    this.store.dispatch(new GetSelectedProductAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductAction(dataForm.keyword))
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct")
  }
}
