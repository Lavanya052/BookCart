import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../../types/Book';
import { BookService } from '../../services/book/book.service';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './seller-product-details.component.html',
  styleUrl: './seller-product-details.component.css' // Fixed styleUrl to styleUrls
})
export class SellerProductDetailsComponent implements OnInit {

  public productId: string | undefined
  public productDetails: Book | undefined
  //public productQuantity: number = 1
  public removeCartLink: boolean = false
  public cartData: any

  isSeller: boolean = localStorage.getItem("isSeller") === "true"; 

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService
    , private cdr: ChangeDetectorRef, private cartService: CartService,private authService:AuthService
  ) { }

  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.productDetails = this.bookService.getBookById(productId);
        // Check if the product is in the cart
        this.removeCartLink = this.cartService.isInCart(productId);
      }
    });

  }


  removeFromCart() {
    if (localStorage.getItem("isAuthenticated")==="true") {
      if (this.productDetails) {
        this.cartService.removeFromCart(this.productDetails);
        this.removeCartLink = false;
        this.updateCartCount();
      }
    } else {
      alert("Please Login to remove")
    }
   
  }

  addToCart() {
    if (localStorage.getItem("isAuthenticated")==="true") {
      if (this.productDetails) {
        this.cartService.addToCart(this.productDetails);
        this.removeCartLink = true;
        this.updateCartCount();
      }
     
    } else {
      alert("Please Login to add")
    }
    
  }

  private updateCartCount() {
    const cartCount = this.cartService.getCartCount();
    this.cartService.updateCartDataLength(cartCount);
}
}

