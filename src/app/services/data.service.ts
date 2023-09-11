import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private baseURL: string = 'https://jsonplaceholder.typicode.com';

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/users`);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/posts`);
  }

  getUser(userId: number): Observable<any> {
    const url = `${this.baseURL}/users/${userId}`;
    return this.http.get<any>(url);
  }

  getPostsByUser(userId: number): Observable<any[]> {
    const url = `${this.baseURL}/posts?userId=${userId}`;
    return this.http.get<any[]>(url);
  }
}
