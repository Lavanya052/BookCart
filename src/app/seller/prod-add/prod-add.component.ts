import { Component } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Router } from '@angular/router';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrl: './prod-add.component.css'
})
export class ProdAddComponent {

  books: Book[] = [];
  newBook: Book = {
    id: '',
    name: '',
    author: '',
    image: '',
    price: 0,
    desc: '',
    quantity: 0,
    categories: ''
  };

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.books$.subscribe(books => {
      this.books = books;
    });
  }

  addBook(): void {
    // Call the addBook method of the BookService with the newBook object
    this.bookService.addBook(this.newBook);
    
    // Reset the newBook object to clear the form inputs
    this.newBook = {
      id: '',
      name: '',
      author: '',
      image: '',
      price: 0,
      desc: '',
      quantity: 1,
      categories: ''
    };

    alert("Book Successfully added")
    this.router.navigate(['/seller'])
  }

}
