import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../home/home.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[]
  task = ''
  description = ''

  constructor() { }

  ngOnInit(): void {
  }

  showEditingInputs (index) {
    this.task = this.todos[index].name
    this.description = this.todos[index].description
    this.todos[index].editable = true
  }

  editTask (index, e) {
    e.preventDefault()
    this.todos[index].name = this.task
    this.todos[index].description = this.description
    this.todos[index].editable = false
  }

  deleteTask (index) {
    if (confirm(`Delete ${this.todos[index].name} task?`)) {
      this.todos.splice(index, 1)
    }
  }
}
