import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class DataService {

  constructor() { }

  lastId: number=0;

  items: Item[] = [];

  createItem(item: Item): void {
  	item.id = ++this.lastId;
  	this.items.push(item);

  }

  toggle(item: Item): Item[] {
    item.complete = !item.complete;
    return this.items;
  }

  removeItem(id: number): Item[] {
  	this.items = this.items
  		.filter(item => item.id != id);	
  	return this.items;	
  }

  editItem(item: Item): Item[] {
  	let index = this.items.findIndex(itemTmp => itemTmp.id === item.id)
  	this.items[index].title = item.title;
    this.items[index].editing = false;
    return this.items;
  }

  getTodos(): Item[] {
  	return this.items;
  }

}
