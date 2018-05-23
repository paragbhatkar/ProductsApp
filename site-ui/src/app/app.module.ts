import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductcardsComponent } from './productcards/productcards.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ProductcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
