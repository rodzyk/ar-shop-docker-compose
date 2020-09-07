import { Injectable } from '@angular/core';
import { ICartItem } from "./cart-item";
import { IProduct } from '../products/product';

const STORAGE_NAME = 'cart_ar_shop';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  list: Array<ICartItem> = [];

  public get total(): number {
    this.copyToSession();
    this.calcTotalPrice();
    return this.totalPrice;
  }

  public get count(): number {
    this.copyToSession();
    this.calcTotalCount();
    return this.totalCount;
  }

  constructor() {
    this.copyFromSession();
  }

  public addToCart(product: IProduct, count: number = 1) {
    let prodIndex = this.list.findIndex(item => item.product.id == product.id);

    (prodIndex >= 0)
      ? this.list[prodIndex].count += count
      : this.list.push({ product, count });

    // copy to session
    this.copyToSession();
  }

  public delete(cartItem: ICartItem, list: Array<ICartItem>) {
    this.deleteFromArray(cartItem, list);

    // copy to session
    this.copyToSession();
  }

  private deleteFromArray(object: Object, array: Array<Object>): boolean {
    const index: number = array.indexOf(object);
    if (index !== -1) {
      array.splice(index, 1);
      return true;
    }
    return false;
  }

  //
  // Calc total price and total count
  //
  totalPrice: number = 0;
  totalCount: number = 0;

  private calcTotalPrice() {
    this.totalPrice = this.list.reduce((sum, current) => sum + (current.product.price * current.count), 0);
  }

  private calcTotalCount() {
    this.totalCount = this.list.reduce((sum, current) => sum + current.count, 0);
  }

  // 
  // Save/Load to/from Storage
  // 
  private copyToSession() {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(this.list));
  }

  private copyFromSession() {
    let cart = localStorage.getItem(STORAGE_NAME);

    if (cart) {
      let res: Array<any> = JSON.parse(cart);
      if (res != undefined) this.list = res;
    }
  }

}
