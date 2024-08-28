import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { CartGuard } from './guard/guard.guard';
import { SearchComponent } from './search/search.component';



const routes: Routes = [

    {path: 'customer', component: ShopComponent},
    {path: 'customer/product-details/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent,canActivate:[CartGuard]},
    {path:'customer/search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
