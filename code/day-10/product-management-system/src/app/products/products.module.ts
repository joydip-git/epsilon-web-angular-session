import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductService } from "./services/product.service";

@NgModule({
    declarations: [ProductListComponent, AddProductComponent, UpdateProductComponent], //component, pipe, directives to be part of this module
    imports: [HttpClientModule, BrowserModule], //module names that you are importing (own, angular modules)
    exports: [ProductListComponent, AddProductComponent, UpdateProductComponent], //all exportable members of this module
    providers: [ProductService],//service names
    bootstrap: [ProductListComponent] //component(s)
})
export class ProductsModule {

}