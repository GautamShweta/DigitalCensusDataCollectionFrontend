import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { MemberService } from './../services/member.service';

@Directive({
  selector: '[appAadharexist]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AadharexistDirective, multi: true }]
})
export class AadharexistDirective {

  constructor(private memberService: MemberService ) {}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
          this.memberService.checkByAadharNumber(control.value).subscribe((data: any) => {
            if (data.success) {
              resolve({ AadharNumberexist: true });
            } else {
              resolve(null);
            }
          });
        });
  }
}








