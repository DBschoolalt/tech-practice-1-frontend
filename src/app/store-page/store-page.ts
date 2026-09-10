import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { NgFor  } from '@angular/common';

import { Data } from '../data';
import { StorePageItem } from "../store-page-item/store-page-item"

@Component({
  selector: 'app-store-page',
  imports: [StorePageItem, NgFor, FormsModule],
  templateUrl: './store-page.html',
  styleUrl: './store-page.scss',
})
export class StorePage {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = ''

  ngOnInit() {
    this.load()
  }

  constructor(
    private data: Data,
    private changeDetectorRef: ChangeDetectorRef,
    ) {}

  filterItems(searchTerm: string) {
    let term = searchTerm.toLowerCase()
    this.filteredItems = this.items.filter((item) => item.name.toLowerCase().includes(term))
    this.changeDetectorRef.detectChanges()
  }

  load() {
    this.data.getItems().subscribe({
      next: (data) => { 
        this.items = data; 
        this.filteredItems = this.items
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
