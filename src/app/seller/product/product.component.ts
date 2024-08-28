import { Component } from '@angular/core';
import { Book } from '../../types/Book';
import { BookService } from '../../services/book/book.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  books: Book[] = [];
  editedBook?: Book | null = null; 
  filteredBooks: Book[] = [];
  bookId:string="0"
  private searchSubscription!: Subscription;
  searchPerformed: boolean = false;
  constructor(private bookService: BookService,private router:Router,private searchService:SearchService) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe(books => {
      this.books = books;
    });
    this.searchSubscription = this.searchService.filteredBooks$.subscribe(filteredBooks => {
      this.filteredBooks = filteredBooks;
    });
  }
 
  search(): void {
    this.searchPerformed = true; 
    if (this.bookId) {
      this.searchSubscription = this.searchService.filteredBooks$.subscribe(filteredBooks => {
        this.filteredBooks = filteredBooks;
      });
      this.searchService.searchBookId(this.bookId);
    } else {
      // Clear the filteredBooks array if both search criteria are empty
      this.filteredBooks = [];
    }
  }

  editBook(book: Book): void {
    const confirmation = window.confirm('Are you sure you want to edit this book?'); // Confirmation dialog
    if (confirmation) {
    this.editedBook = { ...book }; 
  }
}
  
  saveBook(book: Book): void {
    const confirmation = window.confirm('Are you sure you want to save this book?'); // Confirmation dialog
    if (confirmation) {
    this.editedBook = null;
    this.bookService.updateBook(book);
    }
  }
  
  cancelEdit(book: Book): void {
    this.editedBook = null; 
  }
  

  deleteBook(id: string): void {
    const confirmation = window.confirm('Are you sure you want to delete this book?'); // Confirmation dialog
    if (confirmation) {
      // Call the BookService method to delete the book
      this.bookService.deleteBook(id);
      this.filteredBooks = this.filteredBooks.filter(book => book.id !== id);
    }
  }

  redirectToProductDetail(bookId: string): void {
    this.router.navigate(['/seller/product-details', bookId]);
  }
  
}
