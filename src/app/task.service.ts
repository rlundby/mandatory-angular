import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';

export class TaskService {

  taskList = [];
  taskId = 0;

  private subject = new BehaviorSubject(this.taskList);

  getTasks(status: StatusType): Observable<Task[]> {
    return this.subject.asObservable()
      .map(_taskList => _taskList.filter(task  => task.status === status));
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

  updateTask(id: number, status: StatusType) {
    const taskIndex = this.taskList.findIndex(x => x.id === id);
    this.taskList[taskIndex].status = status;
    this.updateSubscribers();

  }
  deleteTask(id: number) {
    const taskIndex = this.taskList.findIndex(x => x.id === id);
    this.taskList.splice(taskIndex, 1);
    this.updateSubscribers();
  }

  updateSubscribers() {
    this.subject.next(this.taskList);
  }
}
