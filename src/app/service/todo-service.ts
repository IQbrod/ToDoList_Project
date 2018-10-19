import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { Todo } from "../model/Todo";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

@Injectable()
export class TodosService {
    constructor(private http : HttpClient) {}

    getAllTodos () : Observable<Todo[]> {
        return this.http.get(`http://localhost:8080/todos`).pipe(
            map((body:any) => body._embedded.todos )
        );
    }

    /*createNewTodo () : void {
        this.http.post('http://localhost:8080/todos', map((body:any) => body.
    }*/
}