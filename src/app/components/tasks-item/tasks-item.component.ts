import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css',
})
export class TasksItemComponent {
  // it will take value from Task interface and task will send it to item.htnl
  @Input() task!: Task; //! it shows this will be use in near future

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> =new EventEmitter();
  faTimes = faTimes;
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task){
    this.onToggleReminder.emit(task)

  }
}
