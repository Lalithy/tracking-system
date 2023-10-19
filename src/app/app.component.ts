import { Component } from '@angular/core';
import { TrackingService } from './service/tracking.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracking-system';

constructor(private trackingService: TrackingService){}

  submit(){
    // this.trackingService.updateData();
    // this.trackingService.saveData();
  }
}
