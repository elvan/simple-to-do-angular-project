import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TODOS } from './dummy-todos';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = TODOS;

  constructor() {}

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }

  addItem() {
    this.todos.push({
      id: this.todos.length + 1,
      title: `Fake example item #${this.todos.length + 1}`,
    });
  }
}
