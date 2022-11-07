import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from './models/to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoApp';
  @Output() newToDo = new EventEmitter<ToDo>();
 
  toDo:ToDo = {} as ToDo;
  todos:ToDo[] = [
    {
      task:"finish python task",
      completed:false
    },
    {
      task:"finish Java task",
      completed:false
    }
  ]

  addNewToDo(newToDo:ToDo):void{
    this.todos.push(newToDo);
  }

  deleteToDo(todo:ToDo):void{
    let index:number = this.todos.findIndex(t => (t.task == todo.task) && (t.completed == todo.completed));
    this.todos.splice(index, 1);
  }
}
