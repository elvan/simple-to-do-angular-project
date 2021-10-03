import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: any;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  removeTodo() {
    if (confirm('Are you sure you?')) {
      this.todosService.removeItem(this.todo.id);
    }
  }
}
