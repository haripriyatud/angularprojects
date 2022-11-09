import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookdataService } from '../services/bookdata.service';
import { Book } from '../model/Book';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  private _jsonURL = 'assets/JsonFiles/sample1.json';
  books: Book[] =[]

  constructor(private http: HttpClient, private bookdata: BookdataService) { }
  ngOnInit(): void {
    this.getbookDetails();
  }

  public getbookDetails(): void {
    this.bookdata.getJSON()
    .subscribe({
      next: data => {
        this.books = data;
        console.log(this.books);
      },
      error: error => {
        console.log(error);
      }
   });
  }
}
