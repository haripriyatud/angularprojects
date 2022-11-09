import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookdataService } from '../services/bookdata.service';
import { Book } from '../model/Book';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }


  viewBooks(){ 
    this.router.navigate(['/books'])
  }

}
