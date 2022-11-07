import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  @Output() newTodo = new EventEmitter<ToDo>();
  
  todo:ToDo = {} as ToDo;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void{
    let result:ToDo = { ...this.todo };
    this.newTodo.emit(result);
    this.todo = {} as ToDo;
  }

}

