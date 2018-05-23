import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductcardsComponent } from './productcards/productcards.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent, 
    children: [
    {
        path: '',
        component: ProductcardsComponent
    }
] },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
