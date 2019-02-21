import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroveComponent } from './grove/grove.component';

@NgModule({
  declarations: [GroveComponent],
  imports: [
    CommonModule
  ],
  exports: [GroveComponent]
})
export class GroveModule { }
