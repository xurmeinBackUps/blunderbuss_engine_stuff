import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetMakerComponent } from './sheet-maker/sheet-maker.component';

@NgModule({
  declarations: [SheetMakerComponent],
  imports: [
    CommonModule
  ],
  exports: [SheetMakerComponent]
})
export class SheetMakerModule { }
