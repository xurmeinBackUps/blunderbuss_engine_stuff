import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcBuilderComponent } from './pc-builder/pc-builder.component';

@NgModule({
  declarations: [PcBuilderComponent],
  imports: [
    CommonModule
  ],
  exports: [PcBuilderComponent]
})
export class PcBuilderModule { }
