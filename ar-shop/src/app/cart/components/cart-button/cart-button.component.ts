import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { changeValueScale } from "src/app/ui/animations";

@Component({
  animations: [changeValueScale],
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

}
