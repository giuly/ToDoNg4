export class Item {
	id: number;
	title: string = '';
	complete: boolean = false;
	editing: boolean = false;

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}