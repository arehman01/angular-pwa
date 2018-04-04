import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	constructor() { }

	setCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	
	getCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

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

			localStorage.setItem("todo_list", JSON.stringify(this.todos));
		}
	}

	onCheckboxChange() {
		localStorage.setItem("todo_list", JSON.stringify(this.todos));		
	}

	ngOnInit() {
		var saved_list = localStorage.getItem("todo_list");
		if(saved_list) {
			this.todos = JSON.parse(saved_list);
		}
	}

}


export interface Todo {
	done: boolean;
	text: string;
}