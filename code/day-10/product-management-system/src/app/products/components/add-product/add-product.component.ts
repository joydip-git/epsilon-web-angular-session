import { Component } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
    //providers: [ProductService]
})
export class AddProductComponent {
    constructor(private productService: ProductService) {

    }
}