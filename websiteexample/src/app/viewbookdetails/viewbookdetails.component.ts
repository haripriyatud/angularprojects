import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/Book';
import { BookdataService } from '../services/bookdata.service';

@Component({
  selector: 'app-viewbookdetails',
  templateUrl: './viewbookdetails.component.html',
  styleUrls: ['./viewbookdetails.component.css']
})
export class ViewbookdetailsComponent implements OnInit {
  title!:any;
  books: Book[] = []


  displayedColumns: string[] = ['description','website'];
  dataSource = new MatTableDataSource<Book>;

  constructor(private bookdata: BookdataService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( paramMap => {
      this.title = paramMap.get('title');
    })   

    this.getbookDetails();
  }

    public getbookDetails(): void {
      this.bookdata.getJSON()
      .subscribe({
        next: data => {
          this.books = data;
          this.dataSource = new MatTableDataSource(this.books);
          this.dataSource.filter= this.title.trim().toLowerCase();
          console.log(this.books);
        },
        error: error => {
          console.log(error);
        }
     });
    }

}
