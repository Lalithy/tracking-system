import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private httpClient: HttpClient) { }
  

  firebaseURL:string = 'https://tracking-system-c82b1-default-rtdb.asia-southeast1.firebasedatabase.app/generators.json'
  saveData(){
    const data = {
      name:'Divice-2',
      lat: 6.97023200599504,
      log: 79.9714257954373
    }
    this.httpClient.post(this.firebaseURL, data).subscribe(res => {
      console.log('res', res);
    })

  }

  getData(){
    return this.httpClient.get(this.firebaseURL);
  }

  getDataByDivice(){
    this.httpClient.get(this.firebaseURL, {
      params: new HttpParams()
      .set('orderBy', '"name"')
      .set('equalTo', '"divice 2"')
    }).subscribe(res =>{
      console.log('res', res);
    })
  }

  // updateData(){
  //   const data = {
  //     name:'divice 1',
  //     lat:'6.9270',
  //     log:'79.8612'
  //   }
  //   key:"";
  //   this.httpClient.put('https://tracking-system-c82b1-default-rtdb.asia-southeast1.firebasedatabase.app/base.json',data).subscribe(res =>{
  //     console.log('res', res);
  //   })

  // }

  updateData() {
  
    const data = {
      name: 'updated_device',
      lat: 6.9271,
      log: 79.8612
    };
    const key = '-NgzAri7Y4q7X0ukXCX8'; // Replace with the specific key of the data you want to update
  
    this.httpClient.put(`https://tracking-system-c82b1-default-rtdb.asia-southeast1.firebasedatabase.app/base/${key}.json`, data)
      .subscribe(res => {
        console.log('res', res);
      });
  }

  
  
  
  
  

}
