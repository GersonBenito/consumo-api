import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = env.urlBase;

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Product[]>{

    return this.http.get<Product[]>(this.url);
    
  }

}
