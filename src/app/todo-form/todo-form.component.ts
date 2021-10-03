import { Component, OnInit } from '@angular/core';
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
    console.log(this.todo);
  }

  addNewItem() {
    this.todosService.addItem();
  }
}
