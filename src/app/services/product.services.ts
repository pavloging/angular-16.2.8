import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IProduct } from "../components/modules/product";
import { Observable, delay } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<IProduct[]> {
        return this.http
            .get<IProduct[]>("https://fakestoreapi.com/products", {
                params: new HttpParams().append("limit", 5),
            })
            .pipe(delay(1000));
    }
}
