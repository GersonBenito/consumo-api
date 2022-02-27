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

  ) { }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(): void {
    this.productService.getProducts().subscribe( res =>{

      this.products = res;
      
    }, error =>{

      console.log('Oops! ocurrio un error al obtener los productos', error);
      
    });
  }

}