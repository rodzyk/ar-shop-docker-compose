import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from "src/app/ui/ui.module";

import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { CartProductItemComponent } from './components/cart-product-item/cart-product-item.component';


@NgModule({
  declarations: [CartPageComponent, CartButtonComponent, CartProductItemComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    UiModule
  ],
  exports: [CartButtonComponent]
})
export class CartModule { }
