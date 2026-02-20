import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = input.required<Task>();
}
