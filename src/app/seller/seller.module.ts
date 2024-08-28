import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SellerProductDetailsComponent } from './seller-product-details/seller-product-details.component';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { SearchComponent } from './search/search.component';
import { SellerRoutingModule } from './seller-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    ProductComponent,
    SellerProductDetailsComponent,
    ProdAddComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ProductComponent }
    ])

  ]
})
export class SellerModule { }
