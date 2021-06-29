import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductState, ProductStateEnum} from '../../../ngrx/product.reducer';
import {Store} from '@ngrx/store';
import {NewProductAction, SaveProductAction} from '../../../ngrx/product.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productsFormGroup:FormGroup | null=null;
  state:ProductState | null=null;
  readonly productStateEnum=ProductStateEnum;
  submitted: boolean=false;
  constructor(private store:Store<any>,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if (this.state?.dataState==ProductStateEnum.NEW){
        this.productsFormGroup=this.fb.group({
          name:["", Validators.required],
          price:[0, Validators.required],
          quantity:[0, Validators.required],
          selected:[true, Validators.required],
          available:[true, Validators.required],
        })
      }
    })

  }

  newProduct() {
    this.store.dispatch(new NewProductAction({}))
  }

  onSaveProduct() {
    this.store.dispatch(new SaveProductAction(this.productsFormGroup?.value))

  }
}
