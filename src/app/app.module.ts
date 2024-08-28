import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { BookService } from './services/book/book.service';
import { FormsModule } from '@angular/forms';


import { HomeModule } from './home/home.module';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustPipePipe } from './cust-pipe.pipe';
import { SellerModule } from './seller/seller.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipeComponent,
    CustPipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    AuthModule,
    HomeModule,
    SellerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
