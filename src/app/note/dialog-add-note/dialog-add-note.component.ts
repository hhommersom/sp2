import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteService } from '../note.service';
import { Reminder } from '../../reminder/reminder.model';
import { SS_NOTE_TMP } from '../../core/persistence/ls-keys.const';


@Component({
  selector: 'dialog-add-note',
  templateUrl: './dialog-add-note.component.html',
  styleUrls: ['./dialog-add-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogAddNoteComponent {
  noteContent: string;
  reminderDate: string;
  isSubmitted = false;

  constructor(
    private _matDialogRef: MatDialogRef<DialogAddNoteComponent>,
    private _noteService: NoteService,
    @Inject(MAT_DIALOG_DATA) public data: { reminder: Reminder },
  ) {
    this.noteContent = sessionStorage.getItem(SS_NOTE_TMP) || '';
  }

  keydownHandler(ev: KeyboardEvent) {
    if (ev.key === 'Enter' && ev.ctrlKey) {
      this.submit();
    }
  }

  submit() {
    const remindAt = this.reminderDate && new Date(this.reminderDate).getTime();

    if (!this.isSubmitted
      && (this.noteContent && this.noteContent.trim().length > 0
        || remindAt)) {
      this._noteService.add(
        {content: this.noteContent},
        remindAt,
        true,
      );

      this.isSubmitted = true;
      this._clearSessionStorage();
      this.close();
    }
  }


  close() {
    this._matDialogRef.close();
  }

  saveTmp(val = this.noteContent || '') {
    sessionStorage.setItem(SS_NOTE_TMP, val);
  }

  private _clearSessionStorage() {
    sessionStorage.setItem(SS_NOTE_TMP, '');
  }
}
