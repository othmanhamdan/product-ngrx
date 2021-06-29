import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  DeleteProductActionError,
  DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess,
  GetAllProductActionError,
  GetAllProductActionSuccess,
  GetSelectedProductActionError,
  GetSelectedProductActionSuccess, NewProductActionSuccess,
  ProductActions,
  ProductActionsTypes, SaveProductActionError, SaveProductActionSuccess,
  SearchProductAction,
  SearchProductActionError,
  SearchProductActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess
} from './product.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  constructor(private productService:ProductService,
              private effectAction:Actions){}

  /*Get All Product*/
getAllproductsEffects:Observable<ProductActions>=createEffect(
  ()=>this.effectAction.pipe(
    ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
    mergeMap((action:ProductActions)=>{
        return this.productService.getAllProducts()
          .pipe(
            map((product)=> new GetAllProductActionSuccess(product)),
            catchError((err)=>of(new GetAllProductActionError(err.message)))
          )
        })
    )
  );

  /*Get Selected Product*/
  getSelectedproductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productService.getSelectedProducts()
          .pipe(
            map((product)=> new GetSelectedProductActionSuccess(product)),
            catchError((err)=>of(new GetSelectedProductActionError(err.message)))
          )
      })
    )
  );
  /*Search Product*/
  searchproductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((product)=> new SearchProductActionSuccess(product)),
            catchError((err)=>of(new SearchProductActionError(err.message)))
          )
      })
    )
  );

  /*Select Product*/
  selectProductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.SELECT_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productService.select(action.payload)
          .pipe(
            map((product)=> new SelectProductActionSuccess(product)),
            catchError((err)=>of(new SelectProductActionError(err.message)))
          )
      })
    )
  );

  /*Delete Product*/
  deleteProductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.DELETE_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productService.delete(action.payload.id)
          .pipe(
            map(()=> new DeleteProductActionSuccess(action.payload)),
            catchError((err)=>of(new DeleteProductActionError(err.message)))
          )
      })
    )
  );
  /*New Product*/
  newProductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.NEW_PRODUCTS),
      map((action:ProductActions)=>{
        return new NewProductActionSuccess({});
      })
    )
  );

  /*Save Product*/
  saveProductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.SAVE_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productService.saveProduct(action.payload)
          .pipe(map((prod)=> new SaveProductActionSuccess(prod)),
          catchError((err) =>of( new SaveProductActionError(err))))
      })
    )
  );

  /*Edit Product*/
  editProductsEffects:Observable<ProductActions>=createEffect(
    ()=>this.effectAction.pipe(
      ofType(ProductActionsTypes.EDIT_PRODUCTS),
      mergeMap((action:ProductActions)=>{
        return this.productService.updateProducts(action.payload)
          .pipe(map((prod)=> new EditProductActionSuccess(prod)),
            catchError((err) =>of( new EditProductActionError(err))))
      })
    )
  );
}
