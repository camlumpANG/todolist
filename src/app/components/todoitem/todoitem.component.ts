import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Output() completed = new EventEmitter<ToDo>();
  @Output() delete = new EventEmitter<ToDo>();
  @Input() toDo:ToDo = {} as ToDo;
  constructor() { }

  ngOnInit(): void {
  }

  deleteToDo():void {
    this.delete.emit(this.toDo)
  }
  completedToDo():void {
    this.completed.emit(this.toDo)
  }

}
