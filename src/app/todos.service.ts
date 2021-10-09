import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Todo } from './todo';

const LOCAL_STORAGE_KEY = 'simple-to-do';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];

  private todoSubject = new BehaviorSubject<Todo>({
    id: '',
    title: '',
  });

  selectedTodo = this.todoSubject.asObservable();

  constructor() {}

  getAllTodos(): Observable<Todo[]> {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (todos) {
      this.todos = JSON.parse(todos);
    } else {
      this.todos = [];
    }

    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

  updateTodo(todo: Todo) {
    this.todos.forEach((current, index) => {
      if (current.id === todo.id) {
        this.todos[index] = todo;
      }
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

  removeTodo(id: string) {
    this.todos.forEach((current, index) => {
      if (current.id === id) {
        this.todos.splice(index, 1);
      }
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }

  setFormTodo(todo: Todo) {
    this.todoSubject.next(todo);
  }

  clearSelectedTodo() {
    this.todoSubject.next({
      id: '',
      title: '',
    });
  }
}
