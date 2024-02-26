import { Component, OnInit } from '@angular/core';
import { AppService, Book } from '../app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getData().subscribe((data) => {
      this.books = data.books;
      console.log(JSON.stringify(data.books[0]));
    });
  }
}
