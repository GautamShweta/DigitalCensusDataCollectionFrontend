import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HouselistingService } from 'src/app/services/houselisting.service';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent {

  ownerShipStatus: Array<string> = ['OWNER', 'RENTED'];
  @ViewChild('f') houseListingForm: NgForm;
  constructor(private houseListingService: HouselistingService) {
  }

  onSubmit() {
    this.houseListingService.postData(this.houseListingForm.value).subscribe((d: any) => {
      if (d.success === true) {
          alert('Added Successfully');
      } else {
        alert(d.message);
      }
    });
  }
}
