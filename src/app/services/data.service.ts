import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getUser(userId: number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get<any>(url);
  }

  getPostsByUser(userId: number): Observable<any[]> {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.http.get<any[]>(url);
  }
}
