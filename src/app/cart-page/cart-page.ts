import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { NgFor  } from '@angular/common';

import { Data } from '../data';
import { CartPageItem } from "../cart-page-item/cart-page-item"

@Component({
  selector: 'app-cart-page',
  imports: [CartPageItem, NgFor],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  items: any[] = [];

  ngOnInit() {
    this.load()
  }

  constructor(
    private data: Data,
    private changeDetectorRef: ChangeDetectorRef,
    ) {}

  clearCart() {
    this.data.clearCart(1)
    this.load()
    this.changeDetectorRef.detectChanges();
  }

  load() {
    this.data.getCustomer(1).subscribe({
      next: (data) => { 
        this.items = data.cart; 
        console.log('app', 'items loaded'); 
        this.changeDetectorRef.detectChanges();
        },
      error: () => { 
        console.log('app', 'items failed to load');
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
