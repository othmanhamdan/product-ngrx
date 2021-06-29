import {Component, Input, OnInit} from '@angular/core';
import {ProductState} from '../../../ngrx/product.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() state:ProductState | null=null
  constructor() { }

  ngOnInit(): void {
  }

}
