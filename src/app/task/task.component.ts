import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StatusType} from '../constants';
import {Subscription} from 'rxjs/Subscription';
import {TaskService} from '../task.service';
import {UtilService} from '../util.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task;
  @Output() changedStatus = new EventEmitter();

  statusTypes = this.utilService.getStatusTypes();
  constructor(private utilService: UtilService) {}

  updateTask(newStatus) {
  this.task.status = newStatus;
  this.changedStatus.emit(this.task);
  }
}


