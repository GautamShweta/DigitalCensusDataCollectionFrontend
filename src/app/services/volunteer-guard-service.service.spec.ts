import { TestBed } from '@angular/core/testing';

import { VolunteerGuardServiceService } from './volunteer-guard-service.service';

describe('VolunteerGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolunteerGuardServiceService = TestBed.get(VolunteerGuardServiceService);
    expect(service).toBeTruthy();
  });
});
