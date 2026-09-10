import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class Data {
  private readonly API_URL = 'http://localhost:3000';

  constructor( 
    private http: HttpClient,
    ) { }

  getItems(): Observable<any> {
    console.log('data', 'retrieving item data')
    return this.http.get(this.API_URL + '/items');
  }

  newItem(item: Item): void {
    console.log('data', 'adding item ['+item.id+'] to items')
    this.http.post(this.API_URL + '/items', item).subscribe((x) => console.log('data', ''));
  }

  removeItem(id: number): void {
    console.log('data', 'removing item ['+id+'] from items')
    this.http.delete(this.API_URL + '/items/'+id).subscribe((x) => console.log('data', ''));
  }

  getImagePath(image_path: string): string {
    return this.API_URL + '/images/'+image_path
  }

  getCustomers(): Observable<any> {
    console.log('data', 'retrieving customer data')
    return this.http.get(this.API_URL + '/customers');
  }

  getCustomer(id: number): Observable<any> {
    console.log('data', 'retrieving customer data with id of '+ id)
    return this.http.get(this.API_URL + '/customers/' + id);
  }

  addToCart(id: number, product_id: number): void {
    console.log('data', 'adding item ['+product_id+'] to cart ['+id+']')
    this.http.post(this.API_URL + '/customers/' + id + '/cart/' + product_id, {id: 1}).subscribe((x) => console.log('data', ''));
  }

  removeFromCart(id: number, product_id: number): void {
    console.log('data', 'removing item ['+product_id+'] from cart ['+id+']')
    this.http.delete(this.API_URL + '/customers/' + id + '/cart/' + product_id).subscribe((x) => console.log('data', ''));
  }

  clearCart(id: number): void {
    console.log('data', 'clearing all items in cart ['+id+']')
    this.http.delete(this.API_URL + '/customers/' + id + '/cart').subscribe((x) => console.log('data', ''));
  }
}
