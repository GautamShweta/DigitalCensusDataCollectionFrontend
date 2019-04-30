import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedVolunteerComponent } from './declined-volunteer.component';

describe('DeclinedVolunteerComponent', () => {
  let component: DeclinedVolunteerComponent;
  let fixture: ComponentFixture<DeclinedVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinedVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinedVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
