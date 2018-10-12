import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../tasks/task.service';
import { Observable } from 'rxjs';
import { TaskWithData } from '../../tasks/task.model';

@Component({
  selector: 'work-view',
  templateUrl: './work-view-page.component.html',
  styleUrls: ['./work-view-page.component.scss'],
})
export class WorkViewPageComponent implements OnInit {
  doneTasks$: Observable<TaskWithData[]> = this._taskService.doneTasks$;
  undoneTasks$: Observable<TaskWithData[]> = this._taskService.undoneTasks$;

  constructor(private _taskService: TaskService) {
  }

  ngOnInit() {
  }
}