import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	constructor() { }

	todos: Todo[] = [];

	newtodo: Todo = {
		done: false,
		text: ""
	}

	addTodo(e) {
		e.preventDefault();
		if( this.newtodo.text ) {
			this.todos.push(Object.assign({}, this.newtodo));
			this.newtodo.text = "";
		}
	}

	ngOnInit() {
	}

}


export interface Todo {
	done: boolean;
	text: string;
}