import {Action} from '@ngrx/store';
import {Product} from '../module/product.model';

export enum ProductActionsTypes {
  GET_ALL_PRODUCTS="[Products] Get All Products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get All Products Success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get All Products Error",
  /*Get Selected Products*/
  GET_SELECTED_PRODUCTS="[Products] Get Selected Products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected Products Success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected Products Error",

  /*Search Products*/
  SEARCH_PRODUCTS="[Products] Search Products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search Products Success",
  SEARCH_PRODUCTS_ERROR="[Products] Search Products Error",

  /*Select Products*/
  SELECT_PRODUCTS="[Products] Select Products",
  SELECT_PRODUCTS_SUCCESS="[Products] Select Products Success",
  SELECT_PRODUCTS_ERROR="[Products] Select Products Error",

  /*Delete Products*/
  DELETE_PRODUCTS="[Products] Delete Products",
  DELETE_PRODUCTS_SUCCESS="[Products] Delete Products Success",
  DELETE_PRODUCTS_ERROR="[Products] Delete Products Error",

  /*New Product Products*/
  NEW_PRODUCTS="[Products] New Products",
  NEW_PRODUCTS_SUCCESS="[Products] New Products Success",
  NEW_PRODUCTS_ERROR="[Products] New Products Error",

  /*Save Products*/
  SAVE_PRODUCTS="[Products] Save Products",
  SAVE_PRODUCTS_SUCCESS="[Products] Save Products Success",
  SAVE_PRODUCTS_ERROR="[Products] Save Products Error",

  /*Edit Products*/
  EDIT_PRODUCTS="[Products] Edit Products",
  EDIT_PRODUCTS_SUCCESS="[Products] Edit Products Success",
  EDIT_PRODUCTS_ERROR="[Products] Edit Products Error",
}

/*Get All Product Action*/
export class GetAllProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any){}
}
export class GetAllProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){}
}
export class GetAllProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*Get Selected Product Action*/
export class GetSelectedProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any){}
}
export class GetSelectedProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){}
}
export class GetSelectedProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*Search Product Action*/
export class SearchProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload:any){}
}
export class SearchProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]){}
}
export class SearchProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*Select Product Action*/
export class SelectProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SELECT_PRODUCTS;
  constructor(public payload:Product){}
}
export class SelectProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SELECT_PRODUCTS_SUCCESS;
  constructor(public payload:Product){}
}
export class SelectProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SELECT_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*Delete Product Action*/
export class DeleteProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.DELETE_PRODUCTS;
  constructor(public payload:Product){}
}
export class DeleteProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.DELETE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){}
}
export class DeleteProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.DELETE_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*New Product Action*/
export class NewProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.NEW_PRODUCTS;
  constructor(public payload:any){}
}
export class NewProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.NEW_PRODUCTS_SUCCESS;
  constructor(public payload:any){}
}
export class NewProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.NEW_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*Save Product Action*/
export class SaveProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SAVE_PRODUCTS;
  constructor(public payload:Product){}
}
export class SaveProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SAVE_PRODUCTS_SUCCESS;
  constructor(public payload:Product){}
}
export class SaveProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.SAVE_PRODUCTS_ERROR;
  constructor(public payload:string){}
}

/*Edit Product Action*/
export class EditProductAction implements Action{
  type:ProductActionsTypes=ProductActionsTypes.EDIT_PRODUCTS;
  constructor(public payload:Product){}
}
export class EditProductActionSuccess implements Action{
  type:ProductActionsTypes=ProductActionsTypes.EDIT_PRODUCTS_SUCCESS;
  constructor(public payload:Product){}
}
export class EditProductActionError implements Action{
  type:ProductActionsTypes=ProductActionsTypes.EDIT_PRODUCTS_ERROR;
  constructor(public payload:string){}
}
export type ProductActions=
  GetAllProductAction | GetAllProductActionError | GetAllProductActionSuccess |
  GetSelectedProductAction | GetSelectedProductActionError | GetSelectedProductActionSuccess |
  SearchProductAction | SearchProductActionError | SearchProductActionSuccess |
  SelectProductAction | SelectProductActionError | SelectProductActionSuccess |
  DeleteProductAction | DeleteProductActionError | DeleteProductActionSuccess |
  NewProductAction | NewProductActionError | NewProductActionSuccess |
  SaveProductAction | SaveProductActionError | SaveProductActionSuccess |
  EditProductAction | EditProductActionError | EditProductActionSuccess



