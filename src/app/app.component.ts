import { Component, OnInit } from "@angular/core";
import { IProduct } from "./components/modules/product";
import { ProductService } from "./services/product.services";
import { Observable, tap } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "angular app";
    // products: IProduct[] = [];
    loading = false
    products$: Observable<IProduct[]>


    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
      this.loading = true
      this.products$ = this.productService.getAll().pipe(
        tap(() => this.loading = false)
      )
      // this.productService.getAll().subscribe((products) => {
      //   this.products = products
      //   this.loading = false
      // });
    }
}