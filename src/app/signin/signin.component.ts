import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
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
  imageUrl = '/assets/img/default-img.png';
  fileToUpload: File = null;
  binaryString: string;
  display = false;
  base64textString: string;
  constructor(private memberService: MemberService,
              private route: Router) { }

  onSubmit() {
    if (this.fileToUpload == null) {
      alert('You Need To Upload an image');
    } else {

      if (this.fileToUpload.type === 'image/jpeg' || this.fileToUpload.type === 'image/png') {
        this.user = this.signInForm.value;

        this.memberService.addMember(this.signInForm.value, this.binaryString, this.fileToUpload.name).subscribe((d: any) => {
          if (d.success === true) {
            alert('Signed Up Successfully!! Wait For Approval');
            this.signInForm.resetForm();
            this.route.navigate(['/']);
          } else {
            alert(d.message);
          }

        }, (error) => {alert('there was some network issue'); } );
      } else {
        alert('Image Format Must Be jpeg or png');
      }
    }
  }

  onImageUpload(evt: any) {
    this.display = true;
    this.fileToUpload = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      console.log(event);
      this.binaryString = btoa(event.target.result);
      this.base64textString = 'data:image/jpeg;base64,' + btoa(event.target.result);

    };
    reader.readAsBinaryString(this.fileToUpload);
  }


}
