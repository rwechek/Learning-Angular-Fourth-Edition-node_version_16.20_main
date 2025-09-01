import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core'
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges {
@Input() product: Product | undefined;
@Output() bought = new EventEmitter<string>();


ngOnChanges(changes: SimpleChanges): void {
  const product = changes['product'];
  if(!product.isFirstChange()){
    const oldValue = product.previousValue.name;
    const newValue = product.currentValue.name;
    console.log(`Product changed from ${oldValue} to ${newValue}`);

  }

}

buy(){
  this.bought.emit(this.product?.name);
}

}

