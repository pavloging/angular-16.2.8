import { Component, Input } from "@angular/core";
import { product } from '../data/product';
import { IProduct } from "../modules/product";

@Component({
    selector: 'app-product',
    templateUrl: "./product.component.html"
})

export class ProductComponent {
    @Input() product: IProduct
    
    details = false
}