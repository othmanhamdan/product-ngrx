import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
import { ProductNavBarComponent } from './component/product/product-nav-bar/product-nav-bar.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import {productReducer} from './ngrx/product.reducer';
import {ProductEffects} from './ngrx/product.effects';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductItemComponent } from './component/product/product-list/product-item/product-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewProductComponent } from './component/product/new-product/new-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductNavBarComponent,
    ProductListComponent,
    ProductItemComponent,
    NewProductComponent,
    EditProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState:productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
