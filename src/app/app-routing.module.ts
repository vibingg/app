import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './auth/landing/landing.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, 
  { path: 'loading', component: LoadingPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
