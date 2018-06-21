import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book:Book = {
  	id: 1,
  	title: 'Lord of the rings',
  	author: 'Kappu',
  	description: 'Lord of the rings is famous book'
  }
  constructor() { }

  ngOnInit() {
  }

}
