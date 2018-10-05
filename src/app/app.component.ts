import { Component, Input } from '@angular/core';
import { Todo } from './model/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() myTodo: Todo;
  title = 'todolist';
 
}
