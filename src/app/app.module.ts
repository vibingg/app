import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './auth/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NameInputPageComponent } from './name-input-page/name-input-page.component';
import { FormsModule } from '@angular/forms';
import { NameFriendInputPageComponent } from './name-friend-input-page/name-friend-input-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoadingPageComponent,
    NameInputPageComponent,
    NameFriendInputPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
