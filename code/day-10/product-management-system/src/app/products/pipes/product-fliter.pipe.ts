import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "src/app/models/IProduct";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    //products|productfilter:searchText:'':''
    transform(valueToTransform: IProduct[], ...args: string[]): IProduct[] {
        const criteria = args[0] ? args[0].toLocaleLowerCase() : null;
        const filteredProducts: IProduct[] =
            criteria && valueToTransform ? valueToTransform.filter(p => p.productName.toLocaleLowerCase().indexOf(criteria) !== -1) : valueToTransform;
        return filteredProducts;
    }
}