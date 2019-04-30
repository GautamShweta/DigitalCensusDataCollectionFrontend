import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-declined-volunteer',
  templateUrl: './declined-volunteer.component.html',
  styleUrls: ['./declined-volunteer.component.css']
})
export class DeclinedVolunteerComponent {
  data: any;
  constructor(private memberService: MemberService) {
    this.memberService.getByStatus('declined').subscribe((d: any) => {
      this.data = d.data;
    });
  }

}
