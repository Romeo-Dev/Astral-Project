import { TestBed } from '@angular/core/testing';

import { MansionService } from './mansion.service';

describe('MansionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MansionService = TestBed.get(MansionService);
    expect(service).toBeTruthy();
  });
});
