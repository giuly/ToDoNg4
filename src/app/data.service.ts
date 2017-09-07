import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class DataService {

  constructor() { }

  lastId: number=0;

  items: Item[] = [];

  getItems(): Item[] {
    return this.items;
  }

  createItem(item: Item): void {
  	item.id = ++this.lastId;
  	this.items.push(item);

  }

  toggle(item: Item): void {
    item.complete = !item.complete;
  }

  toggleAll(complete: boolean) {
    this.items.forEach(item => item.complete = complete);
  }

  removeItem(id: number): void {
  	this.items = this.items
  		.filter(item => item.id != id);	
  }

  editItem(item: Item): void {
  	let index = this.items.findIndex(itemTmp => itemTmp.id === item.id)
  	this.items[index].title = item.title;
    this.items[index].editing = false;
  }

  getWithCompleted(complete: boolean): number {
    let completed = this.items.filter(item => item.complete === complete);
    return completed.length;
  }

  allCompleted(): boolean {
    let completed = this.getWithCompleted(true);
    return this.items.length === completed;
  }

  removeCompleted(): void {
    let active = this.items.filter(item => item.complete === false);
    this.items = active;
  }
}
