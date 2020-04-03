import { TestBed } from '@angular/core/testing';

import { ArgoService } from './argo.service';

describe('ArgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArgoService = TestBed.get(ArgoService);
    expect(service).toBeTruthy();
  });
});
