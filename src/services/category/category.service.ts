import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl: string = env.urlBase;

  constructor( private http: HttpClient ) { }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}/categories`);
  }

}
