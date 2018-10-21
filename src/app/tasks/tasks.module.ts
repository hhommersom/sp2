import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddTaskBarComponent } from './add-task-bar/add-task-bar.component';
import { DialogTimeEstimateComponent } from './dialogs/dialog-time-estimate/dialog-time-estimate.component';
import { ToArrayPipe } from '../util/to-array.pipe';
import { KeysPipe } from '../util/keys.pipe';
import { StoreModule } from '@ngrx/store';
import { TaskEffects } from './store/task.effects';
import { EffectsModule } from '@ngrx/effects';
import { TaskService } from './task.service';
import { taskReducer } from './store/task.reducer';
import { ProjectModule } from '../project/project.module';
import { TASK_FEATURE_NAME } from './store/task.reducer';
import { JiraIssueModule } from '../issue/jira/jira-issue/jira-issue.module';
import { TaskAdditionalInfoComponent } from './task-additional-info/task-additional-info.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    JiraIssueModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TASK_FEATURE_NAME, taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    AddTaskBarComponent,
    DialogTimeEstimateComponent,
    KeysPipe,
    ToArrayPipe,
    TaskAdditionalInfoComponent,
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    AddTaskBarComponent,
    DialogTimeEstimateComponent,
  ],
  providers: [
    TaskService,
  ],
  entryComponents: [DialogTimeEstimateComponent]

})
export class TasksModule {
}
