import { NgModule } from '@angular/core';
import {
  MatSnackBarModule,
  MatTooltipModule,
 } from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatTooltipModule,
  ],
  exports: [
    MatSnackBarModule,
    MatTooltipModule,
  ],
})
export class MaterialModule { }
