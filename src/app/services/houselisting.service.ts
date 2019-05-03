import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HouselistingService {
  constructor(private http: HttpClient) {}

  postData(house: any) {
    return this.http.post(`http://localhost:63816/api/house`, house);
  }


  GetPopulationReport()
  {
    let url='http://localhost:63816/api/house?state=all';
    return this.http.get(url);
  }

  // GetPopulationReport()
  // {
  //   let url='http://localhost:63816/api/house/StateReport';
  //   return this.http.get(url);
  // }

}
