import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/UserModel';
@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }
  getByEmail(email: string) {
    return this.http.get(`http://localhost:63816/api/memberRequest?email=${email}`);
  }

  checkByEmail(email: string) {
    return this.http.get(`http://localhost:63816/api/member?email=${email}`);
  }

  checkByAadharNumber(aadharNumber: string) {
    return this.http.get(`http://localhost:63816/api/member?aadharNumber=${aadharNumber}`);
  }

  getByStatus(status: string) {
    return this.http.get(`http://localhost:63816/api/memberRequest?status=${status}`);
  }

  addMember(member: UserModel, image: string, name: string) {
    return this.http.post(`http://localhost:63816/api/memberRequest`, {member, image, name});
  }
  // addMember(user: UserModel) {
  //   return this.http.post(`http://localhost:63816/api/memberRequest`, user);
  // }

  updateStatus(memberId: number, status: string) {
    return this.http.patch(`http://localhost:63816/api/memberRequest`, { memberId , status});
  }
}


