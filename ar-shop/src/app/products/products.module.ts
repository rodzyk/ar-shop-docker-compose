import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';


@NgModule({
  declarations: [ProductsPageComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
