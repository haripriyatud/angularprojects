import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor(private http: HttpClient) { }
  private _jsonURL = 'http://localhost:8080/books/all';

  public getJSON(): Observable<Book[]> {
    return this.http.get<Book[]>(this._jsonURL);
  }
}
