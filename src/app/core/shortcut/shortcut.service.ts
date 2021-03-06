import { Injectable } from '@angular/core';
import { IS_ELECTRON } from '../../app.constants';
import { checkKeyCombo } from '../util/check-key-combo';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPC_REGISTER_GLOBAL_SHORTCUT_EVENT } from '../../../ipc-events.const';
import { ElectronService } from 'ngx-electron';
import { LayoutService } from '../layout/layout.service';
import { NoteService } from '../../note/note.service';
import { TaskService } from '../../tasks/task.service';
import { MatDialog } from '@angular/material';
import { DialogAddNoteComponent } from '../../note/dialog-add-note/dialog-add-note.component';
import { BookmarkService } from '../../bookmark/bookmark.service';


@Injectable({
  providedIn: 'root'
})
export class ShortcutService {
  backlogPos: number;

  constructor(
    private _configService: ConfigService,
    private _router: Router,
    private _electronService: ElectronService,
    private _layoutService: LayoutService,
    private _matDialog: MatDialog,
    private _noteService: NoteService,
    private _taskService: TaskService,
    private _activatedRoute: ActivatedRoute,
    private _bookmarkService: BookmarkService,
  ) {
    //   // Register electron shortcut(s)
    if (IS_ELECTRON && this._configService.cfg.keyboard.globalShowHide) {
      _electronService.ipcRenderer.send(IPC_REGISTER_GLOBAL_SHORTCUT_EVENT, this._configService.cfg.keyboard.globalShowHide);
    }

    this._activatedRoute.queryParams
      .subscribe((params) => {
        if (params && params.backlogPos) {
          this.backlogPos = +params.backlogPos;
        }
      });
  }

  handleKeyDown(ev: KeyboardEvent) {
    const cfg = this._configService.cfg;
    const keys = cfg.keyboard;
    const el = ev.target as HTMLElement;

    // don't run when inside input or text area and if no special keys are used
    if ((el && el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.getAttribute('contenteditable'))
      && !ev.ctrlKey && !ev.metaKey) {
      return;
    }

    // if (checkKeyCombo(ev, cfg.keyboard.openProjectNotes)) {
    //   Dialogs('NOTES', undefined, true);
    // }
    // if (checkKeyCombo(ev, cfg.keyboard.openDistractionPanel)) {
    //   Dialogs('DISTRACTIONS', undefined, true);
    // }
    // if (checkKeyCombo(ev, cfg.keyboard.showHelp)) {
    //   Dialogs('HELP', {template: 'PAGE'}, true);
    // }
    //
    if (checkKeyCombo(ev, keys.toggleBacklog)) {
      let backlogPos = 0;
      switch (this.backlogPos) {
        case 50:
          backlogPos = 0;
          break;
        case 0:
          backlogPos = 100;
          break;
        default:
          backlogPos = 50;
      }
      this._router.navigate(['/work-view'], {
        queryParams: {backlogPos: backlogPos}
      });
    }
    if (checkKeyCombo(ev, keys.goToWorkView)) {
      this._router.navigate(['/work-view']);
    }
    if (checkKeyCombo(ev, keys.goToDailyAgenda)) {
      this._router.navigate(['/daily-agenda']);
    }
    if (checkKeyCombo(ev, keys.goToSettings)) {
      this._router.navigate(['/settings']);
    }
    if (checkKeyCombo(ev, keys.goToFocusMode)) {
      this._router.navigate(['/focus-view']);
    }
    if (checkKeyCombo(ev, keys.focusLastActiveTask)) {
      this._router.navigate(['/work-view']);
      this._taskService.focusLastActiveTask();
    }
    if (checkKeyCombo(ev, keys.addNewTask)) {
      this._layoutService.toggleAddTaskBar();
      ev.preventDefault();
    }
    if (checkKeyCombo(ev, keys.addNewNote)) {
      if (this._matDialog.openDialogs.length === 0) {
        this._matDialog.open(DialogAddNoteComponent);
        ev.preventDefault();
      }
    }
    if (checkKeyCombo(ev, keys.openProjectNotes)) {
      this._noteService.toggleShow();
      ev.preventDefault();
    }
    if (checkKeyCombo(ev, keys.toggleBookmarks)) {
      this._bookmarkService.toggleBookmarks();
      ev.preventDefault();
    }

    // special hidden dev tools combo to use them for production
    if (IS_ELECTRON) {
      if (checkKeyCombo(ev, 'Ctrl+Shift+J')) {
        window.ipcRenderer.send('TOGGLE_DEV_TOOLS');
      }
    }
  }
}
