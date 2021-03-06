import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiraCfgStepperComponent } from './jira-cfg-stepper/jira-cfg-stepper.component';
import { UiModule } from '../../ui/ui.module';
import { CoreModule } from '../../core/core.module';
import { NgxElectronModule } from 'ngx-electron';
import { DialogJiraInitialSetupComponent } from './dialog-jira-initial-setup/dialog-jira-initial-setup.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    NgxElectronModule,
  ],
  declarations: [JiraCfgStepperComponent, DialogJiraInitialSetupComponent],
  entryComponents: [DialogJiraInitialSetupComponent],
  exports: [JiraCfgStepperComponent],
})
export class JiraModule {
}
