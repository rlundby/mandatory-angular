import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';

export class TaskService {


  taskList = [];
  taskId = 0;

  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  private subject = new BehaviorSubject(this.taskList);

  getTasks(status: StatusType): Observable<Task[]> {
    return this.subject.asObservable()
      .map(_taskList => _taskList.filter(task  => task.status === status));
  }

  updateTask(id: number, status: StatusType) {
    console.log('im here');
    const taskIndex = this.taskList.findIndex(x => x.id === id);
    this.taskList[taskIndex].status = status;
    console.log(this.taskList[taskIndex]);
    this.updateSubscribers();

  }

  addTask(title: string, description: string) {
    this.taskList.push({
      id: ++this.taskId,
      title,
      description,
      status: StatusType.NotStarted
    });
    this.updateSubscribers();
  }

  updateSubscribers() {
    this.subject.next(this.taskList);
  }
}
