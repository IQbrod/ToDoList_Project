import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import { TodosService } from '../../service/todo-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  constructor(private todoService:TodosService) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(
      (pTodos:Todo[]) => this.todos = pTodos
    );
  }

}
