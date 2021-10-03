import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: any;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
