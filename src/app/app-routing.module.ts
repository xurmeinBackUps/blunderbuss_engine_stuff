import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './app-core/page404/page404.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
