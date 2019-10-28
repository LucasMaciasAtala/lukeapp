import { TestBed } from '@angular/core/testing';

import { PenalityService } from './penality.service';

describe('PenalityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenalityService = TestBed.get(PenalityService);
    expect(service).toBeTruthy();
  });
});
