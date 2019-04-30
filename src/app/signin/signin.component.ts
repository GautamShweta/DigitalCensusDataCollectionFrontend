import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../Models/UserModel';
import { MemberService } from '../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  @ViewChild('f') signInForm: NgForm;
  pwdPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  firstnamelastnamepattern = '^[a-zA-Z ]*$';
  aadharPattern = '^[0-9].{11,11}$';
  user: UserModel;
  constructor(private memberService: MemberService,
              private route: Router) { }
  onSubmit() {
    this.user = this.signInForm.value;
    this.memberService.addMember(this.signInForm.value).subscribe((d: any) => {
      if (d.success === true) {
        alert('Signed Up Successfully!! Wait For Approval');
        this.route.navigate(['/']);
      } else {
        alert(d.message);
      }

    });
  }

}
