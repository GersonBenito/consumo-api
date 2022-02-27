import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/notFound/not-found.component';

const router: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'category', component: CategoryComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
