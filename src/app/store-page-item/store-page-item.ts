import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item'
import { Data } from '../data'
//import { Logger } from '../logger'

@Component({
  selector: 'app-store-page-item',
  imports: [],
  templateUrl: './store-page-item.html',
  styleUrl: './store-page-item.scss',
})
export class StorePageItem implements OnInit {
  @Input()
  item: Item = {
      id: 1,
      name: 'coffee',
      image_path: 'coffee',
      price: 9.99,
      desc: 'beverage brewed from roasted, ground coffee beans. Dark-colored and bitter, coffee has a stimulating effect on humans due to its caffeine content',
      amount: 1,
    };

  image_path = ''
  constructor(
    private data: Data,
    ){ 
  }

  ngOnInit() {
    this.image_path= this.data.getImagePath(this.item.image_path)
  }

  addToCart() {
    console.log('item added')
    this.data.addToCart(1, this.item.id)
    //this.logger.log('store-item', 'added item with name "'+this.item.name+'" and id "'+this.item.id+'" to cart of customer with id 1')
  }
}
