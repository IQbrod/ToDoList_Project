import { Component, Input } from '@angular/core';
import { Todo } from './model/Todo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router:Router) {
    router.navigate(['/home']);
  }
 
}
