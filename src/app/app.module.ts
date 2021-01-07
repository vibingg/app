import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './auth/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { NameInputPageComponent } from './name-input-page/name-input-page.component';
import { FormsModule } from '@angular/forms';
import { NameFriendInputPageComponent } from './name-friend-input-page/name-friend-input-page.component';
import { AliceVibePageComponent } from './alice-vibe-page/alice-vibe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoadingPageComponent,
    NameInputPageComponent,
    NameFriendInputPageComponent,
    AliceVibePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
