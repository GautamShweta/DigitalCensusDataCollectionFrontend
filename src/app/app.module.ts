import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApproverComponent } from './approver/approver.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LoginComponent } from './login/login.component';

import { HouseListingComponent } from './volunteer/house-listing/house-listing.component';
import { PopulationRegisterComponent } from './volunteer/population-register/population-register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HouselistingService } from './services/houselisting.service';
import { PopulationregisterService } from './services/populationregister.service';
import { VolunteerHeaderComponent } from './volunteer/volunteer-header/volunteer-header.component';
import { ApproverHeaderComponent } from './approver/approver-header/approver-header.component';
import { PendingVolunteerComponent } from './approver/pending-volunteer/pending-volunteer.component';
import { DeclinedVolunteerComponent } from './approver/declined-volunteer/declined-volunteer.component';
import { ApprovedVolunteerComponent } from './approver/approved-volunteer/approved-volunteer.component';
import { MemberService } from './services/member.service';
import { VolunteerDeclinedComponent } from './volunteer-declined/volunteer-declined.component';
import { VolunteerPendingComponent } from './volunteer-pending/volunteer-pending.component';
import { EmailexistDirective } from './customdirectives/emailexist.directive';
import { AadharexistDirective } from './customdirectives/aadharexist.directive';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './home/homeheader/homeheader.component';
import { HouseNumberExistDirective } from './customdirectives/house-number-exist.directive';
import {VolunteerGuardServiceService} from './services/volunteer-guard-service.service';
import {ApproverGuardServiceService} from './services/approver-guard-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ApproverComponent,
    VolunteerComponent,
    SigninComponent,
    LoginComponent,
    HouseListingComponent,
    PopulationRegisterComponent,
    SigninComponent,
    VolunteerHeaderComponent,
    ApproverHeaderComponent,
    PendingVolunteerComponent,
    DeclinedVolunteerComponent,
    ApprovedVolunteerComponent,
    VolunteerDeclinedComponent,
    VolunteerPendingComponent,
    EmailexistDirective,
    AadharexistDirective,
    HomeComponent,
    HomeheaderComponent,
    HouseNumberExistDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ HouselistingService, PopulationregisterService, MemberService, ApproverGuardServiceService, VolunteerGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
