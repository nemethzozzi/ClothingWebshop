import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private router:Router) {}

  ngOnInit(): void {}

  getCart() {
    return this.cartService.get();
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    for (let item of this.getCart()) {
      totalAmount += item.amount;
    }
    return totalAmount;
  }
  
  deleteitem(index: number): void {
    this.getCart().splice(index, 1);
  }

  order() {
    this.router.navigate(['/order']);
  }  


 }
 


