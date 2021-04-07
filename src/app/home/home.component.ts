import { Component, OnInit } from '@angular/core';

export interface Todo {
  name: string;
  description: string;
  editable: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [
    { name: 'Angular', description: 'Testing Angular', editable: false },
    { name: 'React', description: 'Testing React', editable: false },
    { name: 'Vue', description: 'Consolidate knowledge', editable: false },
    { name: 'Svelte', description: 'Testing Svelte', editable: false }
  ]

  ngOnInit(): void {}

}
