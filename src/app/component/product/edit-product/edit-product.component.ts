import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {EditProductAction} from '../../../ngrx/product.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productID:number;
  constructor(private activatedRoute:ActivatedRoute,
              private store:Store) {
    this.productID=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {

  }

}
