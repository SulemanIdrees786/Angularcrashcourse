import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;

  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiservice: UiService) {
    console.log('hello');

    this.subscription = this.uiservice
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('plz add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    // @todo-emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
