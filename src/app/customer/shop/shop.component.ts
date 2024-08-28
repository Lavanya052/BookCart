import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../types/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopProducts: Book[] = [];

  constructor(private bookService: BookService,private router: Router) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe(books => {
      this.shopProducts = books;
    });
  }

  Book(bookId: string) {
    this.router.navigate(['/customer/product-details',bookId]); // Navigate with book ID
  }

  }
