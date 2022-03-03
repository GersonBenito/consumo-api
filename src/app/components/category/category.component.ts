import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category/category.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: string[] = [];
  public category: string = '';

  constructor(
    private categoriaService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void{
    this.categoriaService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
        
      },
      error: (error) => {
        console.log('Oops!, ocurrio un error en obtener las categorias', error);
        
      },
      complete: () => {
        console.log('get all categories success');
        
      }
    });
  }

  getCategory(): void{
   
    this.productService.category.next(this.category);
    
  }

}
