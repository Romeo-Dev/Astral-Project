import { TestBed } from '@angular/core/testing';

import { EduService } from './edu.service';

describe('EduService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EduService = TestBed.get(EduService);
    expect(service).toBeTruthy();
  });
});
