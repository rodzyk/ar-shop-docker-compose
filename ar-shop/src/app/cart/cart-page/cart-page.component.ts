import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { fadeHeight } from 'src/app/ui/animations';

@Component({
  animations: [fadeHeight],
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

  ondelete($event) {
    this.cart.delete($event, this.cart.list);
  }

}
