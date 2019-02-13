import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './registration/registration.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    RegistrationModule,
    UserDashboardModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
