import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDeclinedComponent } from './volunteer-declined.component';

describe('VolunteerDeclinedComponent', () => {
  let component: VolunteerDeclinedComponent;
  let fixture: ComponentFixture<VolunteerDeclinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDeclinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
