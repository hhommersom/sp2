import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TaskWithAllData } from '../../../../tasks/task.model';

@Component({
  selector: 'issue-content',
  templateUrl: './jira-issue-content.component.html',
  styleUrls: ['./jira-issue-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JiraIssueContentComponent implements OnInit {
  @Input() public task: TaskWithAllData;

  constructor() {
  }

  ngOnInit() {
  }

}