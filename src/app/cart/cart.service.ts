import { Injectable } from '@angular/core';
import { item } from '../types/item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<item> = [];

  constructor() {}

  add(item: item) {
    this.cart.push(item);
  }

  get() {
    return this.cart;
  }

  remove(item: item) {
    this.cart = this.cart.filter((b) => b != item);
  }

  clear(): void {
    this.cart = [];
  }

}
