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

  removeItem(id: number): Item[] {
  	this.items = this.items
  		.filter(item => item.id != id);	
  	return this.items;	
  }

  editItem(item: Item): Item[] {

  	this.items.forEach(function(currentItem) {
  		if(currentItem.id === item.id) {
  			//console.log(item.title, currentItem.title);
  			item.editing = false;
  		}
  	}) 

  	return this.items
  }

  getTodos(): Item[] {
  	return this.items;
  }

}
