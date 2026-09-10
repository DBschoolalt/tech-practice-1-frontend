import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { NgFor  } from '@angular/common';

import { Data } from '../data';

@Component({
  selector: 'app-edit-page',
  imports: [NgFor, FormsModule],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.scss',
})
export class EditPage {
  items: any[] = [];

  id: number = 0;
  name: string = 'noitem';
  desc: string = 'nodesc';
  price: number = 0;
  amount: number = 0;
  image_path: string = 'noimage';

  ngOnInit() {
    this.load()
  }

  constructor(
    private data: Data,
    private changeDetectorRef: ChangeDetectorRef,
    ) {}

  onSubmit() {
    console.log(this.id, this.name, this.desc, this.price, this.amount, this.image_path)
    this.data.newItem({
      id: this.id,
      name: this.name,
      desc: this.desc, 
      price: this.price,
      amount: this.amount,
      image_path: this.image_path
    })
    this.changeDetectorRef.detectChanges();
    this.load()
  }

  removeItem(id: number) {
    this.data.removeItem(id)
    this.changeDetectorRef.detectChanges();
    this.load()
  }
  load() {
    this.data.getItems().subscribe({
      next: (data) => { 
        this.items = data; 
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
