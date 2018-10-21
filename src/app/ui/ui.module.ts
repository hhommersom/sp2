import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDurationDirective } from './duration/input-duration.directive';
import { DurationFromStringPipe } from './duration/duration-from-string.pipe';
import { DurationToStringPipe } from './duration/duration-to-string.pipe';
import { EditOnClickDirective } from './edit-on-click/edit-on-click.directive';
import { InlineMarkdownComponent } from './inline-markdown/inline-markdown.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { ThemeSelectComponent } from './theme-select/theme-select.component';
import { MsToStringPipe } from './duration/ms-to-string.pipe';
import { StringToMsPipe } from './duration/string-to-ms.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),

    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyMaterialModule,


    DragDropModule,

    // material2
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatRippleModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    DurationFromStringPipe,
    DurationToStringPipe,
    InputDurationDirective,
    EditOnClickDirective,
    InlineMarkdownComponent,
    ThemeSelectComponent,
    MsToStringPipe,
    StringToMsPipe,
  ],
  exports: [
    DurationFromStringPipe,
    DurationToStringPipe,
    InputDurationDirective,
    EditOnClickDirective,
    InlineMarkdownComponent,
    ThemeSelectComponent,
    MsToStringPipe,
    StringToMsPipe,

    DragDropModule,

    // material2
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatRippleModule,
    MatProgressSpinnerModule,

    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ]
})
export class UiModule {
}
