import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/Book';
import { BookdataService } from '../services/bookdata.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit{
  books: Book[] = []


  displayedColumns: string[] = ['isbn', 'title','subtitle','author','publisher','details'];
  dataSource = new MatTableDataSource<Book>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private bookdata: BookdataService,private router: Router) { 
    this.dataSource = new MatTableDataSource(this.books);
  }

  ngOnInit(): void {
    this.getbookDetails();

  }

  public getbookDetails(): void {
    this.bookdata.getJSON()
    .subscribe({
      next: data => {
        this.books = data;
        this.dataSource = new MatTableDataSource(this.books);
        this.dataSource.paginator = this.paginator;
        console.log(this.books);
      },
      error: error => {
        console.log(error);
      }
   });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDetails(isbn:any){
    this.router.navigate(['/viewbookDetails',isbn]);
  }
}