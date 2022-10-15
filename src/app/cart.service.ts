import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProducts[] = [];
  product: number = 0;
  total: number = 0;

  constructor() { }
  addToCart(product: IProducts): void {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  sumproduct() {
      this.product = 0;
      for (let val of this.items) {
      this.product += val.price;
    }
    return this.product
  }

  sumtotal() {
      for (let val of this.items) {
      this.total = this.product;
      }
      return this.total
  }


}
