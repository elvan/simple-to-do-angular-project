import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos = [
    {
      title: 'Fake example item #1',
    },
    {
      title: 'Fake example item #2',
    },
    {
      title: 'Fake example item #3',
    },
  ];
}
