import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTrackingComponent } from './main-tracking/main-tracking.component';
import { ViewLocationComponent } from './main-tracking/view-location/view-location.component';

const routes: Routes = [
  { path: '', component: MainTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
