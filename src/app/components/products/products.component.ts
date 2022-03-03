import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product.interface';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor(

    private productService: ProductService,

  ) {
    this.productService.category.subscribe({
      next: category =>{
        console.log('categoria', category);
        this.getProductByCategory(category);
      },
      error: error => {
        console.log('error', error);
        
      }
    });
   }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(): void {
   
    this.productService.getProducts().subscribe({
      next: (res) => {
        
        this.products = res;

      },
      error: (error) => {
        console.log('Oops!, ocurio un error al obtener los datos', error);
      },
      complete: () => {
        console.log('Productos obtenidos correctamente'); 
      }
    });
  }

  getProductByCategory(category: string): void{
    this.productService.getProductByCategory(category).subscribe({
      next: res =>{
        console.log('resultado', res);
        this.products = res;
      },
      error: error =>{
        console.log('error', error);
        
      },
      complete: () =>{
        // funcion
      }
    });
  }

}
