import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonesComponent } from './bones/bones.component';
import { GridTileComponent } from './grid-tile/grid-tile.component';

@NgModule({
  declarations: [BonesComponent, GridTileComponent],
  imports: [
    CommonModule
  ],
  exports: [BonesComponent]
})
export class BonesModule { }
