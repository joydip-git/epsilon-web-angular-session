import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductListComponent } from "./components/product-list/product-list.component";

@NgModule({
    declarations: [ProductListComponent],
    imports: [BrowserModule],
    exports: [ProductListComponent],
    providers: [],
    bootstrap: [ProductListComponent]
})
export class ProductsModule {

}