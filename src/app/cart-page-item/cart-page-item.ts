import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Item } from '../item'
import { Data } from '../data'

@Component({
  selector: 'app-cart-page-item',
  imports: [],
  templateUrl: './cart-page-item.html',
  styleUrl: './cart-page-item.scss',
})
export class CartPageItem implements OnInit {
  @Input()
  item: Item = {
      id: 1,
      name: 'coffee',
      image_path: 'coffee',
      price: 9.99,
      desc: 'beverage brewed from roasted, ground coffee beans. Dark-colored and bitter, coffee has a stimulating effect on humans due to its caffeine content',
      amount: 1,
    };

  @Output() removedItemFromCart = new EventEmitter();


  image_path = ''
  constructor( 
    private data: Data,
    ) { }

  ngOnInit() {
    this.image_path= this.data.getImagePath(this.item.image_path)
  }

  removeFromCart() {
    this.data.removeFromCart(1, this.item.id);
    console.log('cart-item', 'removed item with name "'+this.item.name+'" and id "'+this.item.id+'" from cart of customer with id 1');
    this.removedItemFromCart.emit();
  }
}
