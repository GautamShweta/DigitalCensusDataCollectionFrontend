import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { PopulationregisterService } from './../services/populationregister.service';

@Directive({
  selector: '[appHouseNumberExist]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: HouseNumberExistDirective, multi: true }]
})
export class HouseNumberExistDirective {

  constructor(private populationRegisterService: PopulationregisterService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      this.populationRegisterService.checkHouseNumberExists(control.value).subscribe((data: any) => {
        if (!data.success) {
          resolve({ HouseNumberexist: true });
        } else {
          resolve(null);
        }
      });
    });

  }
}
