import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseListingComponent } from './volunteer/house-listing/house-listing.component';
import { PopulationRegisterComponent } from './volunteer/population-register/population-register.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerPendingComponent } from './volunteer-pending/volunteer-pending.component';
import { VolunteerDeclinedComponent } from './volunteer-declined/volunteer-declined.component';
import { SigninComponent } from './signin/signin.component';
import { PendingVolunteerComponent } from './approver/pending-volunteer/pending-volunteer.component';
import { DeclinedVolunteerComponent } from './approver/declined-volunteer/declined-volunteer.component';
import { ApprovedVolunteerComponent } from './approver/approved-volunteer/approved-volunteer.component';
import { ApproverComponent } from './approver/approver.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ApproverGuardServiceService } from './services/approver-guard-service.service';
import { VolunteerGuardServiceService } from './services/volunteer-guard-service.service';
import { StatereportComponent } from './statereport/statereport.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {path: 'statereport', component: StatereportComponent},
      { path: 'signin', component: SigninComponent },
    ]
  },
  {
    path: 'approver',
    component: ApproverComponent,
    canActivate: [ApproverGuardServiceService],
    children: [
      { path: '', redirectTo: 'pending', pathMatch: 'full'},
      { path: 'pending', component: PendingVolunteerComponent },
      { path: 'declined', component: DeclinedVolunteerComponent },
      {path: 'approved', component: ApprovedVolunteerComponent},
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'requestDeclined',
    component: VolunteerDeclinedComponent,
    pathMatch: 'full'
  },
  {
    path: 'requestPending',
    component: VolunteerPendingComponent,
    pathMatch: 'full'
  },
  {
    path: 'volunteer',
    component: VolunteerComponent,
    canActivate: [VolunteerGuardServiceService],
    children: [
      { path: '', redirectTo: 'houseListing', pathMatch: 'full' },
      { path: 'houseListing', component: HouseListingComponent },
      { path: 'populationRegister', component: PopulationRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
