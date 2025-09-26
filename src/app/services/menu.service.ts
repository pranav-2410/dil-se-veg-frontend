import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8087/menu';

  getMenu(): Observable<item[]> {
    return this.http.get<item[]>(`${this.baseUrl}/getMenu`);
  }

  getItemById(id: number): Observable<item> {
    return this.http.get<item>(`${this.baseUrl}/getItem/${id}`);
  }
}
