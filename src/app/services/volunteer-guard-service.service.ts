import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VolunteerGuardServiceService {

  constructor(private router: ActivatedRoute,
              private route: Router) { }

  canActivate(): boolean {
    if (window.sessionStorage.getItem('userEmail') === null || window.sessionStorage.getItem('role') !== 'volunteer') {
      window.alert('You don\'t have permission to view this page.You Not To Log In');
      window.sessionStorage.clear();
      this.route.navigate([''], { relativeTo: this.router });
      return false;
    } else {
      return true;
    }

  }
}
