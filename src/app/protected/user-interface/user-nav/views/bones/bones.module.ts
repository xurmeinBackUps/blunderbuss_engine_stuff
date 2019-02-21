import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonesComponent } from './bones/bones.component';

@NgModule({
  declarations: [BonesComponent],
  imports: [
    CommonModule
  ],
  exports: [BonesComponent]
})
export class BonesModule { }
