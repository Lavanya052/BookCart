import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../types/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book= {} as Book;

  @Output() viewClicked = new EventEmitter<string>();


  constructor(private router:Router){}

  viewBook() {
    this.viewClicked.emit(this.book.id); // Emit event
  }

}
