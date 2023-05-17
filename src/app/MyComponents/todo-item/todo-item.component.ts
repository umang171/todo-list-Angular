import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Todo} from '../../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!:Todo;
  @Input() i!:number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoActive:EventEmitter<Todo>=new EventEmitter();
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }
  onCheckboxClick(todo:Todo){
    this.todoActive.emit(todo);
  }
}
