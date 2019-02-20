import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const viewRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(viewRoutes)],
  exports: [RouterModule]
})
export class UserNavRoutingModule { }
