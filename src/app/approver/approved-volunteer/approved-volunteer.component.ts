import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-approved-volunteer',
  templateUrl: './approved-volunteer.component.html',
  styleUrls: ['./approved-volunteer.component.css']
})
export class ApprovedVolunteerComponent {
  data: any;
  display: false;
  constructor(private memberService: MemberService) {
    this.memberService.getByStatus('accepted').subscribe((d: any) => {
      this.data = d.data;
    }, (error) => {
      alert('there was some error');
    });
  }

}
