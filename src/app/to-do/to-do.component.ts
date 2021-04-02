import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardCheck, faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  faCoffee = faClipboardCheck;
  
  todos: Todo[] = [
    { task: 'dishes', completed: false },
    { task: 'wash the dog', completed: false },
    { task: 'make the bed', completed: true },
    { task: 'laundry', completed: true },
    { task: 'sweep the floor', completed: false },
  ];

  searchText: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
