import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
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

  constructor() { 
    
  }
  
  ngOnInit(): void {
    console.log('products', this.product);
  }
  
}
