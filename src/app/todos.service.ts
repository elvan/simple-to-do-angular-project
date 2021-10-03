import { Injectable } from '@angular/core';
import * as faker from 'faker';
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
      title: faker.lorem.sentence(),
    });
  }

  removeItem(id: number) {
    this.todos.forEach((current, index) => {
      if (current.id === id) {
        this.todos.splice(index, 1);
      }
    });
  }
}
