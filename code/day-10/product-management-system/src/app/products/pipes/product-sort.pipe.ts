import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Pipe({
    name: 'productsort'
})

export class ProductSortPipe implements PipeTransform {
    transform(value: IProduct[], ...args: string[]): IProduct[] {
        return [];
    }
}