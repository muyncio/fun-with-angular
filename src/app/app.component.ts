import { Component } from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string } | null  = null;
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
  }
}
