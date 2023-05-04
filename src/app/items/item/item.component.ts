import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { item } from '../../types/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class itemComponent implements OnInit {
  @Input() item: item = {} as item;
  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.item);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.item);
  }
}
