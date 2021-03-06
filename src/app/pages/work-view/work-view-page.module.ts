import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkViewPageComponent } from './work-view-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../ui/ui.module';
import { TasksModule } from '../../tasks/tasks.module';
import { RouterModule } from '@angular/router';
import { SplitModule } from './split/split.module';
import { TimeTrackingModule } from '../../time-tracking/time-tracking.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TasksModule,
    SplitModule,
    TimeTrackingModule,
  ],
  declarations: [WorkViewPageComponent],
  exports: [WorkViewPageComponent],
})
export class WorkViewPageModule {
}
