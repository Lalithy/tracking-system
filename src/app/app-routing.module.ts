import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTrackingComponent } from './main-tracking/main-tracking.component';

const routes: Routes = [
  { path: '', component: MainTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
