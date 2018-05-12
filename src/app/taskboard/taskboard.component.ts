import { Component } from '@angular/core';
import {StatusType} from '../constants';
import {UtilService} from '../util.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

 statusTypes = this.utilService.getStatusTypes();

  addNewTask = false;

  handleTaskAdded(event) {
    this.addNewTask = !event;
  }

  constructor(private utilService: UtilService) {}
}
