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

  constructor(private todosService: TodosService) {}

  formMode: 'create' | 'update' = 'create';

  ngOnInit(): void {
    this.todosService.selectedTodo.subscribe((todo) => {
      this.formMode = todo.id === '' ? 'create' : 'update';
      this.todo = todo;
    });
  }

  onSubmit(todoForm: NgForm) {
    if (todoForm.value.title === '') {
      return;
    }

    if (this.formMode === 'create') {
      const newTodo = {
        id: uuidv4(),
        title: this.todo.title,
      };
      this.todosService.addTodo(newTodo);
    } else {
      const updatedTodo = {
        id: this.todo.id,
        title: this.todo.title,
      };
      this.todosService.updateTodo(updatedTodo);
    }

    this.formMode = 'create';
    todoForm.reset();
  }
}
