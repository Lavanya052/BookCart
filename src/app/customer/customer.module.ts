import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { BookService } from '../services/book/book.service';
import { ShopComponent } from './shop/shop.component';
import { BookComponent } from './shop/book/book.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    CartComponent,
    BookComponent,
    SearchComponent

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  providers: [
    BookService,
    { provide: Window, useValue: window } // Provide the Window object
  ],
})
export class CustomerModule { }
