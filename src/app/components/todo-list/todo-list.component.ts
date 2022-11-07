import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todo:ToDo = {} as ToDo;
  todos:ToDo[] = [
    {
      task:"complete todo",
      completed: false
    },
    {
      task:"complete todo",
      completed: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
