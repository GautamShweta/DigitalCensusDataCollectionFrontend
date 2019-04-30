import { TestBed } from '@angular/core/testing';

import { HouselistingService } from './houselisting.service';

describe('HouselistingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouselistingService = TestBed.get(HouselistingService);
    expect(service).toBeTruthy();
  });
});
