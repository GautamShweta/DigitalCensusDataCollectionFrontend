import { TestBed } from '@angular/core/testing';

import { PopulationregisterService } from './populationregister.service';

describe('PopulationregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopulationregisterService = TestBed.get(PopulationregisterService);
    expect(service).toBeTruthy();
  });
});
