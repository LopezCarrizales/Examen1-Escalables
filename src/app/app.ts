import { Component, inject } from '@angular/core';
import { TaskService } from './services/task-service';
import { TaskForm } from './components/task-form/task-form';
import { Content } from './components/content/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, Content],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskService = inject(TaskService);

  handleTaskAdded(newTask: any) {
    this.taskService.addTask(newTask);
  }
}
