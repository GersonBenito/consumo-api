import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/interfaces/product.interface';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  public id: string | null = '';

  public product: Product = {
    id: 0,
    title: '',
    category: '',
    price: 0,
    image: '',
    description: '',
    rating: {
      rate: 0,
      count: 0
    }
  }
  constructor(
    private productService: ProductService,
    private aRouter: ActivatedRoute,
  ) { 

    this.id = this.aRouter.snapshot.paramMap.get('id');
    console.log('id produc', this.id);
    this.getOnlyProduct(this.id);
    
  }

  ngOnInit(): void {
  }

  getOnlyProduct(id: string | null): void{
    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (error) => {
        console.log('error', error);
        
      },
      complete: () => {
        // se puede invocar otra funcion, cuando la petecion se haya completado
      }
    });
  }

}
