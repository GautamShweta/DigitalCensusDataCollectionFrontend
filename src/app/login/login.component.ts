import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { UserModel } from '../Models/UserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../services/member.service';
import { IfStmt } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') logInForm: NgForm;
  constructor(private data: MemberService, private router: ActivatedRoute,
              private route: Router) {
  }
  user: UserModel;

  onSubmit() {

    this.data.getByEmail(this.logInForm.value.email).subscribe((d: any) => {
      if (d.success) {
        if (d.data.password === this.logInForm.value.password) {
          window.sessionStorage.setItem('userEmail', d.data.email);
          if (!d.data.isApprover) {
            window.sessionStorage.setItem('role', 'volunteer');
            if (d.data.status === 'ACCEPTED') {
              alert('You are Logged In');
              this.route.navigate(['/volunteer'], { relativeTo: this.router });
            } else if (d.data.status === 'DECLINED') {
              this.route.navigate(['/requestDeclined'], { relativeTo: this.router });
            } else {
              this.route.navigate(['/requestPending'], { relativeTo: this.router });
            }
          } else {
            alert('You are Logged In As Approver');
            window.sessionStorage.setItem('role', 'approver');
            this.route.navigate(['/approver'], { relativeTo: this.router });
          }
        } else {
          alert('Wrong password');
        }
      } else {
        alert('You Are Not Registered User .Create New Account');
      }
    },
    // tslint:disable-next-line:no-shadowed-variable
    (error) => {
      alert('there was some network issue');
    } );


  }

}
