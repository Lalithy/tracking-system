import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TrackingService } from '../service/tracking.service';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ViewLocationComponent } from './view-location/view-location.component';

@Component({
  selector: 'app-main-tracking',
  templateUrl: './main-tracking.component.html',
  styleUrls: ['./main-tracking.component.css'],
})

export class MainTrackingComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'lat', 'log', 'button'];
  dataSource:any;
  array:any[] =[];
  
  // @ViewChild(MatPaginator, {static: true, read: MatPaginator}) paginator: MatPaginator;
    //@ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
    @ViewChild('paginator', { static: true }) paginator: MatPaginator;

  constructor(private trackingService:TrackingService,private dialog: MatDialog){

  }

  ngOnInit(){
    this.trackingService.saveData();
    this.findAllTrackingDiviceDetails();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAllTrackingDiviceDetails(){
    this.trackingService.getData().subscribe((res:any)=>{
      var data = Object.keys(res).map((key:any)=>{
        return res[key]
      })
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator =  this.paginator;
    })
  }
  viewLocation(e:any, element:any){
    console.log(element)
    let dialogRef = this.dialog.open(ViewLocationComponent, {
      height: '500px',
      width: '900px',
      data: {
        lat: element.lat,
        log: element.log
      }
    });
  }

  
}

export interface PeriodicElement {
  name: string;
  lat:string;
  log:string
}


