import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingVolunteerComponent } from './pending-volunteer.component';

describe('PendingVolunteerComponent', () => {
  let component: PendingVolunteerComponent;
  let fixture: ComponentFixture<PendingVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
