import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
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
    submitData(addForm: any) {
        //console.log(addForm.value)
        this.productService.addProduct(addForm.value)
            .subscribe(
                data => console.log(data),
                err => console.log(err)
            )
    }
}