import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();

  @Input() id = -1;
  product$: Observable<Product | undefined> = new Observable();

  constructor(private productsService: ProductsService) {}

  ngOnChanges(): void {
    this.product$ = this.productsService.getProduct(this.id);
  }

  buy() {
    this.bought.emit();
  }

  changePrice(product: Product, price: number) {
    this.productsService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }
}
