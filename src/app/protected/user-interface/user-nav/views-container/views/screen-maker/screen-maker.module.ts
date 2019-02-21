import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenMakerComponent } from './screen-maker/screen-maker.component';

@NgModule({
  declarations: [ScreenMakerComponent],
  imports: [
    CommonModule
  ],
  exports: [ScreenMakerComponent]
})
export class ScreenMakerModule { }
