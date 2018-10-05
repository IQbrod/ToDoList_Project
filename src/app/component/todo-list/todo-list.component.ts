import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  constructor() { }

  ngOnInit() {
    this.todos = [{id:1, name:'task1', completed:false},
      {id:1, name:'task1', completed:false},
      {id:1, name:'task1', completed:false}];
  }

}
