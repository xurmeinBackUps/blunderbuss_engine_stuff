import { Component, OnInit } from '@angular/core';
import { Grid } from '../../../../../../../app-core/models/grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid: Grid = {
    Xunits: 0,
    Yunits: 0
  }
  
  constructor() { }

  ngOnInit() {
  }

}
