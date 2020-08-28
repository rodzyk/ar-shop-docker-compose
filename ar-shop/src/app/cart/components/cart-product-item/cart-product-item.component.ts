import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../cart.service';
import { fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale } from "src/app/ui/animations";

@Component({
  animations: [fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale],
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent implements OnInit {

  @Output() delete = new EventEmitter<any>();

  private _value: any;
  @Output() valueChange = new EventEmitter();

  set value(val: any) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Input() get value(): any {
    return this._value;
  }

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit(this.value);
  }

}
