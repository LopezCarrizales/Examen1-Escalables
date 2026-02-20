import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { TaskCard } from '../task-card/task-card';
import { TaskControls } from '../task-controls/task-controls';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TaskCard, TaskControls],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  taskService = inject(TaskService);
  filter = signal<'all' | 'completed' | 'pending'>('all');

  filteredTasks = computed(() => {
    const tasks = this.taskService.tasks();
    const currentFilter = this.filter();

    if (currentFilter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else if (currentFilter === 'pending') {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  });

  handleFilterChange(newFilter: 'all' | 'completed' | 'pending') {
    this.filter.set(newFilter);
  }
}
