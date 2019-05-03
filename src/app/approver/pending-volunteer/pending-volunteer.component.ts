import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-pending-volunteer',
  templateUrl: './pending-volunteer.component.html',
  styleUrls: ['./pending-volunteer.component.css']
})
export class PendingVolunteerComponent {

  data: any;
  // base64string: string;
  // convertedImage: any;
  constructor(private memberService: MemberService) {
    this.refreshList();
  }

  refreshList() {
    this.memberService.getByStatus('pending').subscribe((d: any) => {
      this.data = d.data;
      console.log(d);
      // console.log(this.data.image);
      // this.base64string = this.data.image;
      // this.convertedImage = 'data:image/jpeg;base64,' + this.base64string;
    });
  }
  onClick(memberId: number, status: string) {
    this.memberService.updateStatus(memberId, status).subscribe((d: any) => {
      alert(' Request Is ' + status);
      this.refreshList();
    }, (error) => {alert('there was some error'); });
  }
}


