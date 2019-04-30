import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopulationregisterService } from 'src/app/services/populationregister.service';

@Component({
  selector: 'app-population-register',
  templateUrl: './population-register.component.html',
  styleUrls: ['./population-register.component.css']
})
export class PopulationRegisterComponent {
  maritalStatus: Array<string> = ['UNMARRIED', 'MARRIED', 'DIVORCED'];
  relationShipStatus: Array<string> = ['SELF', 'SPOUSE', 'SON', 'DAUGHTER', 'SIBLING', 'GRANDSON', 'GRANDDAUGHTER'];
  occupationStatus: Array<string> = ['EMPLOYED', 'STUDENT', 'UNEMPLOYED'];
  occupationType: Array<string> = ['GOVT_SECTOR', 'PRIVATE_SECTOR', 'SELF_EMPLOYED'];
  gender: Array<string> = ['MALE', 'FEMALE', 'OTHERS'];
  @ViewChild('f') houseListingForm: NgForm;
  constructor(private populationRegisterService: PopulationregisterService) {
  }

  onSubmit() {
    this.populationRegisterService.postData(this.houseListingForm.value).subscribe((d: any) => {
      if (d.success === true) {
        alert('Added Successfully');
    } else {
      alert(d.message);
    }
    });
  }

}
