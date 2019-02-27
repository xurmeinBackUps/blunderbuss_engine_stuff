import { Component, OnInit } from '@angular/core';
import { GridTile } from '../../../../../../../app-core/models/grid-tile.model';

@Component({
  selector: 'app-grid-tile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.css']
})
export class GridTileComponent implements OnInit {
  tile: GridTile = {
    sides_length: 1,
    tile_color: 'white'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
