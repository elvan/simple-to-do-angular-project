import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.todosService.selectedTodo.subscribe((todo) => {
      this.todo = todo;
    });
  }

  onSubmit() {
    if (this.todo.title === '') {
      return;
    }

    if (this.todo.id === '') {
      console.log('create');

      const newTodo = {
        id: uuidv4(),
        title: this.todo.title,
      };
      this.todosService.addTodo(newTodo);
    } else {
      console.log('update');

      const updatedTodo = {
        id: this.todo.id,
        title: this.todo.title,
      };
      this.todosService.updateTodo(updatedTodo);
    }
  }
}
