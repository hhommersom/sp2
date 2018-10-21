import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Task, TaskWithAllData, TimeSpentOnDay } from '../task.model';
import { TaskState } from './task.reducer';
import { Tick } from '../../core/time-tracking/time-tracking';

export enum TaskActionTypes {
  LoadState = '[Task] Load Task State',
  SetCurrentTask = '[Task] SetCurrentTask',
  UnsetCurrentTask = '[Task] UnsetCurrentTask',

  // Task Actions
  LoadTasks = '[Task] Load Tasks',
  AddTask = '[Task] Add Task',
  AddTaskWithIssue = '[Task]/[Issue] Add Task with Issue',
  AddTasks = '[Task] Add Tasks',
  UpdateTask = '[Task] Update Task',
  UpdateTasks = '[Task] Update Tasks',
  DeleteTask = '[Task] Delete Task',
  DeleteTasks = '[Task] Delete Tasks',
  ClearTasks = '[Task] Clear Tasks',
  Move = '[Task] Move Task',
  AddTimeSpent = '[Task] Add time spent',
  UpdateTimeSpent = '[Task] Update time spent',

  // Sub Task Actions
  AddSubTask = '[Task] Add SubTask',
}

export class LoadState implements Action {
  readonly type = TaskActionTypes.LoadState;

  constructor(public payload: { state: TaskState }) {
  }
}

export class SetCurrentTask implements Action {
  readonly type = TaskActionTypes.SetCurrentTask;

  constructor(public payload: any) {
  }
}

export class UnsetCurrentTask implements Action {
  readonly type = TaskActionTypes.UnsetCurrentTask;
}

export class LoadTasks implements Action {
  readonly type = TaskActionTypes.LoadTasks;

  constructor(public payload: { tasks: Task[] }) {
  }
}

export class AddTask implements Action {
  readonly type = TaskActionTypes.AddTask;

  constructor(public payload: { task: Task }) {
  }
}

export class AddTaskWithIssue implements Action {
  readonly type = TaskActionTypes.AddTaskWithIssue;

  // TODO right type for issue
  constructor(public payload: { task: TaskWithAllData, issue: any }) {
  }
}

export class AddTasks implements Action {
  readonly type = TaskActionTypes.AddTasks;

  constructor(public payload: { tasks: Task[] }) {
  }
}

export class UpdateTask implements Action {
  readonly type = TaskActionTypes.UpdateTask;

  constructor(public payload: { task: Update<Task> }) {
  }
}

export class UpdateTasks implements Action {
  readonly type = TaskActionTypes.UpdateTasks;

  constructor(public payload: { tasks: Update<Task>[] }) {
  }
}

export class DeleteTask implements Action {
  readonly type = TaskActionTypes.DeleteTask;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteTasks implements Action {
  readonly type = TaskActionTypes.DeleteTasks;

  constructor(public payload: { ids: string[] }) {
  }
}

export class ClearTasks implements Action {
  readonly type = TaskActionTypes.ClearTasks;
}

export class Move implements Action {
  readonly type = TaskActionTypes.Move;

  constructor(public payload: { taskId: string, targetItemId: string, isMoveAfter: boolean }) {
  }
}

export class AddTimeSpent implements Action {
  readonly type = TaskActionTypes.AddTimeSpent;

  constructor(public payload: { taskId: string, tick: Tick }) {
  }
}

export class UpdateTimeSpent implements Action {
  readonly type = TaskActionTypes.UpdateTimeSpent;

  constructor(public payload: { taskId: string, timeSpentOnDay: TimeSpentOnDay }) {
  }
}

export class AddSubTask implements Action {
  readonly type = TaskActionTypes.AddSubTask;

  constructor(public payload: { task: Task, parentId: string }) {
  }
}

export type TaskActions
  = LoadTasks
  | LoadState
  | SetCurrentTask
  | UnsetCurrentTask
  | AddTask
  | AddTaskWithIssue
  | AddTasks
  | UpdateTask
  | UpdateTasks
  | DeleteTask
  | DeleteTasks
  | ClearTasks
  | Move
  | AddTimeSpent
  | UpdateTimeSpent
  | AddSubTask;

