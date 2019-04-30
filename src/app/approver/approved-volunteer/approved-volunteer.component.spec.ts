import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedVolunteerComponent } from './approved-volunteer.component';

describe('ApprovedVolunteerComponent', () => {
  let component: ApprovedVolunteerComponent;
  let fixture: ComponentFixture<ApprovedVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
