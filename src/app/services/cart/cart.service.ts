import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../../types/Book';
import { Cart } from '../../types/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Book[] = [];

  constructor(private window: Window) {
    // this.loadCartFromSession();
  }

  private loadCartFromSession() {
    const cartString = sessionStorage.getItem('cart');
    if (cartString) {
      this.cart.push(JSON.parse(cartString));
    }
  }
  cartDataLength = new EventEmitter<number>(); // Use EventEmitter to emit events
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();


  updateCartDataLength(count: number) {
    this.cartDataLength.next(count);
  }

  addToCart(book: Book) {
    let cart: Book[] = JSON.parse(sessionStorage.getItem('cart') || '[]');

    const existingBook = cart.find(item => item.id === book.id);
    if (existingBook) {
      existingBook.quantity = (existingBook.quantity || 0) + 1;
    } else {
      book.quantity = 1;
      cart.push(book);
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
    this.updateCartDataLength(cart.length);
  }
  removeFromCart(book: Book) {
    let cart: Book[] = JSON.parse(sessionStorage.getItem('cart') || '[]');

    const index = cart.findIndex(item => item.id === book.id);
    if (index !== -1) {
      cart.splice(index, 1);
      sessionStorage.setItem('cart', JSON.stringify(cart));
      this.updateCartDataLength(cart.length);
    }
  }
  getCartCount(): number {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    return cart.length;
  }

  getCart() {
    return JSON.parse(sessionStorage.getItem('cart') || '[]');
  }

  isInCart(productId: string): boolean {
    const cart = this.getCart();
    return cart.some((item: any) => item.id === productId);
  }


}
