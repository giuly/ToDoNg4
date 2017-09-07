import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

	items: Item[] = [];

  constructor(private dataService: DataService) { }

  private getItems() {
    this.items = this.dataService.getItems();
  }

  ngOnInit():void {
  	this.getItems();
  }

  deleteItem(item:Item): void {
  	this.dataService.removeItem(item.id); 
    this.getItems();
  }

  updateItem(item: Item, value:string): void {
    item.title = value;
  	this.dataService.editItem(item);
    this.getItems();
  }

  toggleComplete(item:Item): void {
    this.dataService.toggle(item);
    this.getItems();
  }

  toggleCompleteAll(complete: boolean) {
    this.dataService.toggleAll(complete);
    this.getItems();
  }

  deleteCompleted(): void {
    this.dataService.removeCompleted();
    this.getItems();
  }
}
