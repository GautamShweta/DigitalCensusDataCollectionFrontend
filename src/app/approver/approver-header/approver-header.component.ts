import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approver-header',
  templateUrl: './approver-header.component.html',
  styleUrls: ['./approver-header.component.css']
})
export class ApproverHeaderComponent  {

  constructor() { }
  onClick() {
    sessionStorage.clear();
  }
}
