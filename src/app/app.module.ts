import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './app-core/db/in-memory-data.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './app-core/page404/page404.component';
import { UnprotectedModule } from './unprotected/unprotected.module';
import { ProtectedModule } from './protected/protected.module';

// to be removed once authorization & server implemented
import { DevNavComponent } from './dev-nav/dev-nav.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProtectedModule,
    UnprotectedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    //will remove later
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    Page404Component,
    //will remove later
    DevNavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
