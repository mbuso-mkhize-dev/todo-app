import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  tasks = [
    { key: 1, name: 'Laundry late', completed: false },
    { key: 2, name: 'Laundry early', completed: false }
  ];
  constructor() { }

  getTodoTasks() {
    return this.tasks;
  }

  removeTask(key: number) {
    this.tasks.splice(this.tasks.findIndex(c => c.key == key), 1);
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({
      key: this.getNewId(),
      name: title,
      completed: false
    });
  }

  checkOrUncheckTitle(key: number, flag: boolean) {
    this.tasks.forEach(element => {
      if (element.key === key) {
        element.completed = flag;
      }
    });
  }

  getNewId() {
    return this.tasks.length + 1;
  }

}
