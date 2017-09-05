import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input-app.component.html',
  styleUrls: ['./input-app.component.css']
})
export class InputAppComponent {

	private item:Item = new Item();

  constructor(private dataService: DataService) { }

  addItem(): void {
  	this.dataService.createItem(this.item);
  	this.item = new Item();
  }
}
