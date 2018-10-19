import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodosService } from './service/todo-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
