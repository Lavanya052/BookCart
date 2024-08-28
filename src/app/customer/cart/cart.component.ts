import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../types/Book';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cart: Book[] = [];
  public totalPrice: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCardDetails();
  }

  loadCardDetails() {
    this.cart = this.cartService.getCart();
    this.updateTotalPrice();
  }

  removeFromCart(productDetails: Book) {
    this.cartService.removeFromCart(productDetails);
    this.loadCardDetails(); // Reload cart details after removal 
    this.router.navigate([this.router.url]).then(() => {
      // Navigate to home page first, then reload the window
      window.location.reload();
    });
  }

  handleQuantity(val: string, productDetails: Book) {
    if (productDetails) {
      if (val === 'plus') {
        if (productDetails.quantity < 20) {
          productDetails.quantity += 1;
        }
      } else if (val === 'min' && productDetails.quantity > 1) {
        productDetails.quantity -= 1;
      }
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.cart.reduce((total: number, item: { quantity: number; price: number; }) => total + ((item.quantity || 0) * item.price), 0);
  }

  checkoutCart() {
    if (this.cart.length === 0) {
      alert("Your cart is empty. Please add books to proceed.");
    } else {
      alert(`Successfully Checked Out. Total Price: $${this.totalPrice}`);
    }
  }
}
