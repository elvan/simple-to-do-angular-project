import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.todosService.addItem();
  }
}
