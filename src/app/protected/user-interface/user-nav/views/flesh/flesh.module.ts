import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleshComponent } from './flesh/flesh.component';

@NgModule({
  declarations: [FleshComponent],
  imports: [
    CommonModule
  ],
  exports: [FleshComponent]
})
export class FleshModule { }
