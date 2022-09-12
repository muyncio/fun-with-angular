import { Component } from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode: boolean = false;
  taskName: string = "";
  taskDate = "";
  config: { [key: string]: string } | null  = null;
  date = new Date();
  task : Task[] = [{
    name: 'Siłka',
    deadline: '2022-09-09',
    done: false
  },
    {
      name: 'Nauka Angulara',
      deadline: '2022-09-09',
      done: true
    },
    {
      name: 'Wycieczka do Gorzowa',
      deadline: '2022-09-10',
      done: true
    },
    {
      name: 'Siłka',
      deadline: '2022-09-12',
      done: false
    }
];

  constructor() {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString()
      };
      this.sortTask();
  }
  clearTasks(){
    this.task = [];
  }
   createTask(){
    const taks: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.task.push(taks);
    this.taskName = "";
    this.taskDate = "";
     this.sortTask();
   }
   switchEditMode(){
    this.editMode = !this.editMode;
   }
   markTaskAsDone(task: Task){
    task.done = true;
     this.sortTask();
   }
   deleteTask(task: Task){
    this.task = this.task.filter(e => e !== task);
     this.sortTask();
   }
   private sortTask(){
    this.task = this.task.sort((a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 : -1);
   }
}
