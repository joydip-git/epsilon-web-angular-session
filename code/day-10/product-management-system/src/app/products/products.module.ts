import { NgModule } from "@angular/core";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { UpdateProductComponent } from './components/update-product/update-product.component';

@NgModule({
    declarations: [ProductListComponent, AddProductComponent, UpdateProductComponent],
    imports: [],
    exports: [ProductListComponent, AddProductComponent, UpdateProductComponent],
    providers: [],
    bootstrap: [ProductListComponent]
})
export class ProductsModule {

}