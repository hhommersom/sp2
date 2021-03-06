import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import { AddTaskBarComponent } from './add-task-bar/add-task-bar.component';
import { DialogTimeEstimateComponent } from './dialogs/dialog-time-estimate/dialog-time-estimate.component';
import { ToArrayPipe } from '../core/util/to-array.pipe';
import { KeysPipe } from '../core/util/keys.pipe';
import { StoreModule } from '@ngrx/store';
import { TaskEffects } from './store/task.effects';
import { EffectsModule } from '@ngrx/effects';
import { TaskService } from './task.service';
import { TASK_FEATURE_NAME, taskReducer } from './store/task.reducer';
import { ProjectModule } from '../project/project.module';
import { JiraIssueModule } from '../issue/jira/jira-issue/jira-issue.module';
import { TaskAdditionalInfoComponent } from './task-additional-info/task-additional-info.component';
import { SelectTaskComponent } from './select-task/select-task.component';
import { AttachmentModule } from './attachment/attachment.module';
import { IssueModule } from '../issue/issue.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    JiraIssueModule,
    IssueModule,
    UiModule,
    FormsModule,
    AttachmentModule,
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
    SelectTaskComponent,
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    AddTaskBarComponent,
    SelectTaskComponent,
    DialogTimeEstimateComponent,
  ],
  providers: [
    TaskService,
    DragulaService
  ],
  entryComponents: [DialogTimeEstimateComponent]

})
export class TasksModule {
}
