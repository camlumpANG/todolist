import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoitemComponent,
    TodoListComponent,
    ToDoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
