import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.css'],
})
export class TodosDashboardComponent implements OnInit {
  todos: Todo[] = [];

  selectedTodo!: Todo;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
