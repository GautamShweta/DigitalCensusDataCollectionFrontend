import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HouselistingService } from 'src/app/services/houselisting.service';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent {

   States = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");

  statevalue="Haryana";

  ownerShipStatus: Array<string> = ['OWNER', 'RENTED'];
  @ViewChild('f') houseListingForm: NgForm;
  constructor(private houseListingService: HouselistingService) {
  }

  onSubmit() {
    this.houseListingService.postData(this.houseListingForm.value).subscribe((d: any) => {
      if (d.success === true) {
        console.log(d.data);
        alert('Added Successfully.Census House Number is ' + d.data.houseId);
        this.houseListingForm.resetForm();
      } else {
        alert(d.message);
      }
    }, (error) => { alert('There was some network issue'); });
  }
}
