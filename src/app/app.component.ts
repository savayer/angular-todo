import { Component } from '@angular/core';

export interface Todo {
  name: string;
  description: string;
  editable: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
  todos: Todo[] = [
    { name: 'Svelte', description: 'Testing Svelte', editable: false },
    { name: 'React', description: 'Testing React', editable: false },
    { name: 'Vue', description: 'Consolidate knowledge', editable: false }
  ]
}
