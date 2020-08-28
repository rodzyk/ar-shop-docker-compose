import { Injectable } from '@angular/core';

const storageName = 'cart_ar_shop';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  list: Array<any> = [];

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
    this.calcTotalPrice();
  }

  public addToCart(prod: any, count: number = 1) {
    let prodIndex = this.searchProduct(prod, this.list);

    if (prodIndex >= 0) {
      let oldCount: number = this.list[prodIndex].count;
      let newCount: number = parseInt(oldCount + "") + parseInt(count + "");

      this.list[prodIndex].count = newCount;
    } else {
      this.list.push({
        product: prod,
        count: count,
      });
    }

    // copy to session
    this.copyToSession();

    // calc total price
    this.calcTotalPrice();
    this.calcTotalCount();
  }

  public delete(cartItem: any, list: Array<any>) {
    this.deleteFromArray(cartItem, list);

    // copy to session
    this.copyToSession();

    // calc total price
    this.calcTotalPrice();
  }

  private searchProduct(prod: any, list: Array<any>): number {
    for (let i = 0; i < list.length; i++) {
      const p: any = list[i].product;
      if (p.id === prod.id) return i;
    }

    return -1;
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
    this.totalPrice = 0;
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      let sum = element.product.price * element.count;
      this.totalPrice += sum;
    }
  }

  private calcTotalCount() {
    this.totalCount = 0;
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      this.totalCount += element.count;
    }
  }

  // 
  // Save/Load to/from Storage
  // 
  private copyToSession() {
    localStorage.setItem(storageName, JSON.stringify(this.list));
  }

  private copyFromSession() {
    let cart = localStorage.getItem(storageName);

    if (cart) {
      let res: Array<any> = JSON.parse(cart);
      if (res != undefined) this.list = res;
    }
  }

}
