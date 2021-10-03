import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TODOS } from './dummy-todos';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = TODOS;

  private todoSubject = new BehaviorSubject<Todo>({
    id: '',
    title: '',
  });

  selectedTodo = this.todoSubject.asObservable();

  constructor() {}

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }

  getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  addItem() {
    this.todos.push({
      id: +this.todos.length + 1 + '',
      title: faker.lorem.sentence(),
    });
  }

  removeItem(id: string) {
    this.todos.forEach((current, index) => {
      if (current.id === id) {
        this.todos.splice(index, 1);
      }
    });
  }

  editItem(todo: Todo) {
    this.todoSubject.next(todo);
  }
}
