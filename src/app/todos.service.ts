import { Injectable } from '@angular/core';
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

  getAllTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  setFormTodo(todo: Todo) {
    this.todoSubject.next(todo);
  }

  updateTodo(todo: Todo) {
    this.todos.forEach((current, index) => {
      if (current.id === todo.id) {
        this.todos[index] = todo;
      }
    });
  }

  removeTodo(id: string) {
    this.todos.forEach((current, index) => {
      if (current.id === id) {
        this.todos.splice(index, 1);
      }
    });
  }
}
