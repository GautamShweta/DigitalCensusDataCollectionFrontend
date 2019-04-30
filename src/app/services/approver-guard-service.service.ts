import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ApproverGuardServiceService implements CanActivate {

  constructor( private router: ActivatedRoute,
               private route: Router) { }

    canActivate(): boolean {
      if (window.sessionStorage.getItem('userEmail') === null || window.sessionStorage.getItem('role') !== 'approver') {
        window.alert('You don\'t have permission to view this page.You Need To Log In');
        window.sessionStorage.clear();
        this.route.navigate([''], { relativeTo: this.router });
        return false;
      } else {
        return true;
      }
    }


}




