import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StatusType} from '../constants';
import {Subscription} from 'rxjs/Subscription';
import {TaskService} from '../task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task;
  @Output() changedStatus = new EventEmitter();

  statusTypes = ['Not Started', 'In Progress', 'Completed'];

  updateTask (status) {
    this.taskService.updateTask(this.task.id, status);
  }

  constructor(private taskService: TaskService) {}
}
