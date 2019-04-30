import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HouselistingService {
  constructor(private http: HttpClient) {}

  postData(house: any) {
    return this.http.post(`http://localhost:63816/api/house`, house);
  }

}
