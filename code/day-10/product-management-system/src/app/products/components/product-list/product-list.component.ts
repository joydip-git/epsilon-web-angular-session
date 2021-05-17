import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from '../../services/product.service';

//@Injectable
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnChanges {

  // private productService: ProductService
  // constructor(ps: ProductService) {
  //   this.productService = ps;
  // }
  products: IProduct[] = [];
  searchText = '';
  selectedOption: string = '--select--';

  constructor(private productService: ProductService) {
    //this.productService = productService;
    // setTimeout(() => {
    // this.productService.fetchProducts()
    //   .subscribe(
    //     (data: IProduct[]) => { this.products = data; },
    //     (err) => console.log(err),
    //     () => console.log(this.products)
    //   )
    // }, 3000);
    // console.log('after asynchronous request made')
    // console.log(this.products)
  }

  loadData(): void {
    this.productService.fetchProducts()
      .subscribe(
        (data: IProduct[]) => { this.products = data; },
        (err) => console.log(err),
        () => console.log(this.products)
      )
  }
  ngOnInit() {
    this.loadData()
  }

  ngOnChanges() {
    // this.loadData();
  }

  // changeSearchText(searchData: string): void {
  //   this.searchText = searchData;
  // }
}
