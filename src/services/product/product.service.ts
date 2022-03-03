import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = env.urlBase;
  public category = new BehaviorSubject<string>('');
  
  public dataProduct = new BehaviorSubject<number>(0);
  

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Product[]>{

    return this.http.get<Product[]>(this.url);
    
  }

  getProductById(id: string | null): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  getProductByCategory(category: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/category/${category}`);
  }

}
