import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges{
@Input() name ='';
@Output() bought = new EventEmitter<string>();

ngOnInit(): void {
  console.log(`Name is ${this.name} in the ngOnInit`);
}

ngOnChanges(changes: SimpleChanges): void {
  const product = changes['name'];
  if(!product.isFirstChange()){
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log(`Product changed from ${oldValue} to ${newValue}`);

  }

}

constructor(){
  console.log(`Name is ${this.name} in the constructor`);
}

buy(){
  this.bought.emit(this.name);
}

get productName(): string {
console.log(`Get ${this.name}`);
return this.name;
}

}

