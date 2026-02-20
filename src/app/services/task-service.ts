import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  addTask(task: Task): void {
    this.tasks.update((current) => [...current, task]);
  }
}
