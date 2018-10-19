import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodosService } from './service/todo-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';

const indexRoutes = [
  {path:"todos", component: TodoListComponent},
  {path:"home", component: HomeComponent},
  {path:"help", component: HelpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    HomeComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(indexRoutes, {useHash:true})
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
