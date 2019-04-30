import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-declined',
  templateUrl: './volunteer-declined.component.html',
  styleUrls: ['./volunteer-declined.component.css']
})
export class VolunteerDeclinedComponent  {

  constructor() { }

  onClick() {
    sessionStorage.clear();
  }

}
