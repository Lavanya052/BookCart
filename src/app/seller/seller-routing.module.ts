import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerProductDetailsComponent } from './seller-product-details/seller-product-details.component';

import { ProdAddComponent } from './prod-add/prod-add.component';
import { SearchComponent } from './search/search.component';
import { ShopComponent } from '../home/shop/shop.component';
import { AuthGuard } from './guard/guard.guard';

const routes: Routes = [
  {path: 'seller/product-details/:id', component: SellerProductDetailsComponent},
  {path: 'seller/search',component:SearchComponent},
  {path: 'seller/add',component:ProdAddComponent},
  {path: 'seller',component:ShopComponent},
 { path: 'seller/update', loadChildren: () => import('./seller.module').then(m => m.SellerModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
