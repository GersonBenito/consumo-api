import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { DetailProductComponent } from './components/detail/detail-product.component';

const router: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'detail/:id', component: DetailProductComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
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
