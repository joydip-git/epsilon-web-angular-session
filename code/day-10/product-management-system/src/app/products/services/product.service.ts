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
        return <Observable<IProduct[]>>this.http.get(this.productsUrl);
    }
    public fetchProductById(id: number): void {
        this.http.get(`${this.productsUrl}/${id}`)
    }
    public addProduct(): void {
        this.http.post(this.productsUrl, {});
    }
    public updateProduct(): void {
        this.http.put(this.productsUrl, {});
    }
    public deleteProduct(id: number): void {
        this.http.delete(`${this.productsUrl}/${id}`)
    }
}