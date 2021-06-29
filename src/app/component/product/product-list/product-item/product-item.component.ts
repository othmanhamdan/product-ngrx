import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../module/product.model';
import {Store} from '@ngrx/store';
import {DeleteProductAction, SelectProductAction} from '../../../../ngrx/product.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product | null=null;
  constructor(private store:Store,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.store.dispatch(new SelectProductAction(product));
  }

  onDelete(product: Product) {
    let conf=confirm("Etes-vous sur ??? ")
    if (conf==true)
      this.store.dispatch(new DeleteProductAction(product));
  }

  onEdit(product: Product) {
        this.router.navigateByUrl("/editProduct/"+product.id);
  }
}
