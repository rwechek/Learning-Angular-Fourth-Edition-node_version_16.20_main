import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductViewService } from './product-view/product-view.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductViewService],
})
export class ProductsModule { }
