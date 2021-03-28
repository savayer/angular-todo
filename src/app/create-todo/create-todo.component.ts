import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../app.component";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  @Input() todos: Todo[]

  adding = false
  newTask: Todo = {
    name: '',
    description: '',
    editable: false
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.todos.push(this.newTask)
    this.resetNewTask()
  }

  resetNewTask () {
    this.newTask = { name: '', description: '', editable: false }
  }

}
