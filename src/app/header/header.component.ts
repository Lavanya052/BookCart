import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService, } from '../services/auth/auth.service';
import { NavigationEnd, Route, Router } from '@angular/router';

import { BookService } from '../services/book/book.service';
import { Book } from '../types/Book';
import { CartService } from '../services/cart/cart.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public userRole: string = '';
  public cartCount: number = 0;
  public userName: string = '';
  public isAuthenticate: boolean = false;
  bookService: any;

  constructor(private router: Router, private authservice: AuthService,private cartService:CartService) { }

 
  isAuthenticated() {
    this.isAuthenticate = this.authservice.isAuthenticated;
    return this.authservice.isAuthenticated;
  }
  isAuth() {
    alert("Login to see cart")
  }
  logOut() {
    this.authservice.logOut()
  }

  seller(){
    alert("login through seller email")
  }

  customer(){
    alert("login through customer email")
  }
  

  ngOnInit(): void {
    this.authservice.reload(); // Update menuType when component initializes
    this.userRole = this.authservice.menuType;
    
    // Subscribe to changes in cart count
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    // Initialize cart count
    this.cartCount = this.cartService.getCartCount();
  }

}
