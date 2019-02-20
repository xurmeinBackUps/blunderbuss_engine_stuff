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
  ],
  declarations: [
    AppComponent,
    Page404Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
