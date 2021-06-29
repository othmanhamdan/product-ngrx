import {Product} from '../module/product.model';
import {ProductActions, ProductActionsTypes} from './product.actions';
import {Action} from '@ngrx/store';

export enum ProductStateEnum {
  LOADING="Loading ...",
  LOADED="Loaded ...",
  ERROR="ERROR ...",
  INITIAL="Initial ...",
  NEW="New",
  EDIT="Edit"
}
export interface ProductState {
  product:Product[],
  errorMessage:string,
  dataState:ProductStateEnum,
  currentProduct:Product | null
}
const initialState:ProductState={
  product:[],
  errorMessage:"",
  dataState:ProductStateEnum.INITIAL,
  currentProduct:null
}
export function productReducer(state:ProductState=initialState, action:Action):ProductState {
  switch (action.type) {
    /*Get All Product*/
    case ProductActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductStateEnum.LOADED, product:(<ProductActions>action).payload}
    case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}
    /*Get Selected Product*/
    case ProductActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductStateEnum.LOADED, product:(<ProductActions>action).payload}
    case ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}
    /*Search Product*/
    case ProductActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductStateEnum.LOADED, product:(<ProductActions>action).payload}
    case ProductActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}

    /*Selected Product*/
    case ProductActionsTypes.SELECT_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.SELECT_PRODUCTS_SUCCESS:
      let prod:Product=(<ProductActions>action).payload;
      let listProduct=[...state.product];
      let data:Product[]=listProduct.map(p=>p.id==prod.id?prod:p);
      return {...state, dataState:ProductStateEnum.LOADED, product:data}
    case ProductActionsTypes.SELECT_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}


    /*Delete Product*/
    case ProductActionsTypes.DELETE_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.DELETE_PRODUCTS_SUCCESS:
      let p:Product=(<ProductActions>action).payload;
      let index=state.product.indexOf(p)
      let productList=[...state.product];
      productList.splice(index,1)
      return {...state, dataState:ProductStateEnum.LOADED, product:productList}
    case ProductActionsTypes.DELETE_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}

    /*New Product*/
    case ProductActionsTypes.NEW_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.NEW_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductStateEnum.NEW}
    case ProductActionsTypes.NEW_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}

    /*Save Product*/
    case ProductActionsTypes.SAVE_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.SAVE_PRODUCTS_SUCCESS:
      let saveProduct=(<ProductActions>action).payload;
      let productSave=[...state.product];
      productSave.push(saveProduct);
      return {...state, dataState:ProductStateEnum.LOADED, product:productSave}
    case ProductActionsTypes.SAVE_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}


    /*Edit Product*/
    case ProductActionsTypes.EDIT_PRODUCTS:
      return {...state, dataState:ProductStateEnum.LOADING}
    case ProductActionsTypes.EDIT_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductStateEnum.LOADED, currentProduct:(<ProductActions>action).payload}
    case ProductActionsTypes.EDIT_PRODUCTS_ERROR:
      return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductActions>action).payload}

    default : return {...state}
    
  }
  
}
