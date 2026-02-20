import { Component, EventEmitter, inject, input, Output, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private fb = inject(FormBuilder);

  @Output() taskAdded = new EventEmitter<Task>();

  taskForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    priority: ['Low'],
    completed: false,
  });

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskAdded.emit(this.taskForm.value);
      this.taskForm.reset({ priority: 'Low', completed: false });
    }
  }
}
