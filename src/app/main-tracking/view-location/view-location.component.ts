import { AfterViewInit,Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit , AfterViewInit{
  latitude:number = 6.97023200599504
  longitude:number = 79.9714257954373
  locationChosen = false;

  constructor(public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<ViewLocationComponent>){

  }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
   this.latitude = this.data.lat
    this.longitude =this.data.log
  }

  display: any;
    center: google.maps.LatLngLiteral = {
        lat: this.latitude,
        lng: this.longitude
    };
    zoom = 6;

    marker = {
      position: { lat: this.latitude, lng:  this.longitude },
    }
  
    /*------------------------------------------
    --------------------------------------------
    moveMap()
    --------------------------------------------
    --------------------------------------------*/
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
  
    /*------------------------------------------
    --------------------------------------------
    move()
    --------------------------------------------
    --------------------------------------------*/
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
}
