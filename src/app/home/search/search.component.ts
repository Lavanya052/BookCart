import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Book } from '../../types/Book';
import { SearchService } from '../../services/search/search.service';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements  OnDestroy {
  authorName: string = '';
  bookName: string = '';
  filteredBooks: Book[] = [];
  private searchSubscription!: Subscription;
  searchPerformed: boolean = false;
 
  constructor(private searchService: SearchService,private router:Router) { }
 
  /*ngOnInit(): void {
    this.searchSubscription = this.searchService.filteredBooks$.subscribe(filteredBooks => {
      this.filteredBooks = filteredBooks;
    });
  }*/
 
  search(): void {
    this.searchPerformed = true; 
    if (this.authorName.trim() || this.bookName.trim()) {
      this.searchSubscription = this.searchService.filteredBooks$.subscribe(filteredBooks => {
        this.filteredBooks = filteredBooks;
      });
      this.searchService.searchBook(this.authorName, this.bookName);
    } else {
      // Clear the filteredBooks array if both search criteria are empty
      this.filteredBooks = [];
    }
  }
  
  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  redirectToProductDetail(bookId: string): void {
    this.router.navigate(['/product-details', bookId]);
  }
}
 