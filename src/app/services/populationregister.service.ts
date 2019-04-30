import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PopulationregisterService {
  constructor(private http: HttpClient) {}

  postData(person: any) {
    console.log(person);
    return this.http.post(`http://localhost:63816/api/person`, person);
  }

  checkHouseNumberExists(houseNumber: number) {
    console.log(houseNumber);
    return this.http.get(`http://localhost:63816/api/person?censusHouseNumber=${houseNumber}`);
  }
}
