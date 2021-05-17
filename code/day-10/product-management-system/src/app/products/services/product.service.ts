import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "src/app/models/IProduct";


// @Injectable({
//     providedIn: 'root'
// })

@Injectable()
export class ProductService {
    //private productsUrl = ' productsUrl: 'http://127.0.0.1:8081/productservice'
    private productsUrl: string;

    constructor(private http: HttpClient) {
        this.productsUrl = environment.productsUrl;
    }

    //Observable of array of json objects --> Observable of array of IProduct objects
    public fetchProducts(): Observable<IProduct[]> {
        const result: Observable<Object> = this.http.get(this.productsUrl);
        const finalResult: Observable<IProduct[]> = <Observable<IProduct[]>>result;
        return finalResult;
    }
    public fetchProductById(id: number): void {
        this.http.get(`${this.productsUrl}/${id}`)
    }
    public addProduct(product: IProduct): Observable<Object> {
        console.log(product)
        return this.http.post(this.productsUrl, product);
    }
    public updateProduct(): void {
        this.http.put(this.productsUrl, {});
    }
    public deleteProduct(id: number): void {
        this.http.delete(`${this.productsUrl}/${id}`)
    }
}