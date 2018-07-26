import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
tasksAry = [];
  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.tasksAry = this.toDoService.getTodoTasks().filter( c => c.completed);
  }

  onDelete(key: number) {
    this.tasksAry = this.toDoService.removeTask(key).filter( c => c.completed);
  }


}
