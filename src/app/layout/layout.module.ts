import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AddRecordComponent} from './add-record/add-record.component';
import {ResultsComponent} from './results/results.component';
import {LayoutComponent} from './layout.component';
import {AppComponent} from '../app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddRecordComponent,
    ResultsComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class LayoutModule { }
