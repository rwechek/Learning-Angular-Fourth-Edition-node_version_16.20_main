import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {ProductDetailComponent} from '../product-detail/product-detail.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
selectedProduct = '';

@ViewChild(ProductDetailComponent) productDetail:
ProductDetailComponent | undefined;

ngAfterViewInit(): void {
  if(this.productDetail){
    console.log(`Product name in ProductList is ${this.productDetail.productName}`);
  }
}

onBuy(name: string){
  window.alert(`You just bought ${name}!`);
}

}


