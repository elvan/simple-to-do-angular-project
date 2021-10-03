import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  editItem() {
    this.todosService.setFormTodo(this.todo);
  }

  removeItem() {
    if (confirm('Are you sure you?')) {
      this.todosService.removeTodo(this.todo.id);
    }
  }
}
