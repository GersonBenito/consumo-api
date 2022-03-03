import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() public products: Product[] | false = [];

  constructor() { 
    console.log(this.products);
    
  }

  ngOnInit(): void {
    console.log(this.products);
    
  }

}
