import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string; // Assuming the date is represented as a string in ISO format
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private dataUrl =
    'https://run.mocky.io/v3/b91b48ca-98a9-4d96-8804-3145cfb0eadc'; // URL to JSON file

  constructor(private http: HttpClient) {}

  getData(): Observable<{ books: Book[] }> {
    return this.http.get<any>(this.dataUrl);
  }
}
