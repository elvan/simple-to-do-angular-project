import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo!: Todo;

  title: string = '';

  constructor(private todosService: TodosService) {}

  formMode: 'create' | 'update' = 'create';

  ngOnInit(): void {
    this.todosService.selectedTodo.subscribe((todo) => {
      if (todo.id !== null) {
        this.todo = todo;
        this.formMode = 'update';
        this.title = todo.title;
      }
    });
  }

  onSubmit(todoForm: NgForm) {
    if (todoForm.value.title === '') {
      return;
    }

    if (this.formMode === 'create') {
      const newTodo = {
        id: uuidv4(),
        title: todoForm.value.title,
      };
      this.todosService.addTodo(newTodo);
    } else {
      const updatedTodo = {
        id: this.todo.id,
        title: todoForm.value.title,
      };
      this.todosService.updateTodo(updatedTodo);
    }

    this.formMode = 'create';
    todoForm.reset();
  }
}
