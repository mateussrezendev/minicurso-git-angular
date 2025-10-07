import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  addTask(title: string) {
    this.tasks.push({
      id: this.nextId++,
      title,
      completed: false,
      createdAt: new Date(),
    });
  }

  toggleTask(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}