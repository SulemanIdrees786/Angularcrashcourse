import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [CommonModule, TasksItemComponent, AddTaskComponent],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.gettasks().subscribe((task1) => (this.tasks = task1));
  }
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t1) => t1.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    //console.log('task');

    this.taskService
      .addTask(task)
      .subscribe((singletask) => this.tasks.push(singletask));
  }
}
