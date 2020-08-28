import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../product';
import { CartService } from "../../../cart/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

  toCart($event: Event, item: any) {
    $event.preventDefault();
    this.cart.addToCart(item);
  }

}
