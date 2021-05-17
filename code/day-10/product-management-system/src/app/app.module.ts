import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './products/products.module';
//import { ProductService } from './products/services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // providers: [ProductService],
})
export class AppModule { }
