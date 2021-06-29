import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductState, ProductStateEnum} from '../../ngrx/product.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productState$:Observable<ProductState> | null=null;
  readonly dataStateEnum=ProductStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.productState$=this.store
      .pipe(map(
        (state)=> state.catalogState
      ));
  }

}
