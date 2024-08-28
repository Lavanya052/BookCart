import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../../types/Book';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 private books: Book[] = [];

  private filteredBooksSubject = new BehaviorSubject<Book[]>([]);
  filteredBooks$ = this.filteredBooksSubject.asObservable();

  constructor() {
    this.books = this.getBooksFromSession();
    this.filteredBooksSubject.next(this.books);
  }

  private getBooksFromSession(): Book[] {
    const booksString = localStorage.getItem('books'); // Use localStorage directly instead of window.localStorage
    return booksString ? JSON.parse(booksString) : [];
  }

  searchBook(authorName: string, bookName: string) {
    const filteredBooks = this.books.filter(book => {
      const authorMatch = authorName ? book.author.toLowerCase().includes(authorName.toLowerCase()) : true;
      const bookMatch = bookName ? book.name.toLowerCase().includes(bookName.toLowerCase()) : true;
      return authorMatch && bookMatch;
    });
    this.filteredBooksSubject.next(filteredBooks);
  }
  searchBookId(id:string) {
    const filteredBooks = this.books.filter(book => book.id === id);
    this.filteredBooksSubject.next(filteredBooks);
  }
}
