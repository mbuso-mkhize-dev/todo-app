import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  todoListArray: any[];
  tasksAry = [];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.tasksAry = this.toDoService.getTodoTasks();
    this.toDoService.tasks = this.tasksAry;

  }

  onAdd(itemTitle) {
    if (itemTitle.value.length) {
      this.toDoService.addTask(itemTitle.value);
      itemTitle.value = null;
    }
  }

  alterCheck(key: number, isChecked) {
    this.toDoService.checkOrUncheckTitle(key, !isChecked);
  }

  onDelete(key: number) {
    this.toDoService.removeTask(key);
  }

}
