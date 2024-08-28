import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Book } from '../../types/Book';
import { Cart } from '../../types/cart';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  // to retrive and display books
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();
  filteredProducts$: any;

  constructor(private window: Window) { 
    this.books = this.getBookFromSession();
  }

  private getBookFromSession(): Book[] {
    const books = this.window.localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }

  private set books(books: Book[]) {
    this.booksSubject.next(books);
  }

  getBooks(): Book[] {
    return this.booksSubject.getValue();
  }

  getBookById(id: string): Book | undefined {
    return this.getBooks().find(book => book.id === id);
  }
  
  /* seller add update delete*/
  addBook(book: Book): void {
    const updatedBooks = [...this.getBooks(), book];
    this.updateBooks(updatedBooks);
  }

  deleteBook(id: string): void {
    const updatedBooks = this.getBooks().filter(book => book.id !== id);
    this.updateBooks(updatedBooks); // Update the books array in the service
    localStorage.removeItem(id); // Remove the specific item from local storage
}

  updateBook(updatedBook: Book): void {
    const updatedBooks = this.getBooks().map(book => {
      if (book.id === updatedBook.id) {
        return { ...book, ...updatedBook };
      }
      return book;
    });
    this.updateBooks(updatedBooks);
  }

  private updateBooks(books: Book[]): void {
    this.booksSubject.next(books);
    this.saveBooksToLocalStorage(books);
  }

  private saveBooksToLocalStorage(books: Book[]): void {
    this.window.localStorage.setItem('books', JSON.stringify(books));
  }
  
}
