import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }title = signal('to-do-app');
}
