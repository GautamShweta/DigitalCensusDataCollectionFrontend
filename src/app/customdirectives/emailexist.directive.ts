import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { MemberService } from './../services/member.service';

@Directive({
  selector: '[appEmailexist]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailexistDirective, multi: true }]

})
export class EmailexistDirective implements AsyncValidator {
  constructor(private memberService: MemberService ) {}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
          this.memberService.checkByEmail(control.value).subscribe((data: any) => {
            if (data.success) {
              resolve({ Emailexist: true });
            } else {
              resolve(null);
            }
          });
        });
  }
}






