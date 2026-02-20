import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-task-controls',
  standalone: true,
  templateUrl: './task-controls.html',
  styleUrl: './task-controls.css',
})
export class TaskControls {
  @Output() filterChanged = new EventEmitter<'all' | 'completed' | 'pending'>();

  activeFilter = signal<'all' | 'completed' | 'pending'>('all');

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.activeFilter.set(filter);
    this.filterChanged.emit(filter);
  }
}
