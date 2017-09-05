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

  ngOnInit():void {
  	this.items = this.dataService.getTodos();
  }

  deleteItem(item:Item): void {
  	this.items = this.dataService.removeItem(item.id); 
  }

  updateItem(item: Item, value:string): void {
    item.title = value;
  	this.items = this.dataService.editItem(item);
  }

  toggleComplete(item:Item): void {
    this.items = this.dataService.toggle(item);
  }

}
