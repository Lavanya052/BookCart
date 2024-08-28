import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';
import { HomeProductDetailsComponent } from './home-product-details/home-product-details.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './shop/book/book.component';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [
    SearchComponent,
    HomeProductDetailsComponent,
    ShopComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
