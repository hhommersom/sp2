import { Component, DoCheck, HostBinding, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import shortid from 'shortid';
import { MatDialog } from '@angular/material';
import { DialogTimeEstimateComponent } from '../dialogs/dialog-time-estimate/dialog-time-estimate.component';
import { expandAnimation } from '../../ui/animations/expand.ani';

// import {Task} from './task'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  host: {
    'class': 'mat-elevation-z4'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation]
})
export class TaskComponent implements OnInit, DoCheck {
  // @Input() task: Task;
  @Input() task: any;
  @HostBinding('class.is-done') isDone = false;
  @HostBinding('class.is-current') isCurrent = false;
  currentTaskId$: Observable<string>;
  subTaskListId: string;

  constructor(
    private readonly _taskService: TaskService,
    private readonly _matDialog: MatDialog
  ) {
  }

  ngDoCheck() {
    this.isDone = this.task.isDone;
  }

  ngOnInit() {
    this.currentTaskId$ = this._taskService.currentTaskId$;
    this.currentTaskId$.subscribe((val) => {
      this.isCurrent = (this.task && val === this.task.id);
    });

    this.subTaskListId = shortid();
  }

  deleteTask(taskId: string) {
    this._taskService.remove(taskId);
  }


  startTask(taskId: string) {
    this._taskService.setCurrentId(taskId);
  }

  pauseTask() {
    this._taskService.pauseCurrent();
  }

  updateTaskIfChanged(isChanged, idToEdit, task) {
    if (isChanged) {
      this.updateTask(idToEdit, task);
    }
  }

  updateTask(idToEdit: string, taskTitle: string) {
    this._taskService.update(idToEdit, {title: taskTitle});
    // todo focus task again
  }

  estimateTime(task: Task) {
    this._matDialog
      .open(DialogTimeEstimateComponent, {
        data: {task},
      })
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  addSubTask(task: Task) {
    this._taskService.addSubTask(task);
  }

  // TODO refactor to action ?
  toggleTaskDone(taskId: string, isDone: boolean) {
    if (!isDone) {
      this._taskService.setDone(taskId);
    } else {
      this._taskService.setUnDone(taskId);
    }
  }

  toggleShowNotes(taskId: string, isShowNotes: boolean) {
    if (!isShowNotes) {
      this._taskService.showNotes(taskId);
    } else {
      this._taskService.hideNotes(taskId);
    }
  }

  focusTask() {
  }


  onTaskNotesChanged(idToEdit: string, $event) {
    this._taskService.update(idToEdit, {notes: $event.newVal});
  }
}
