import { TestBed } from '@angular/core/testing';

import { NemesisService } from './nemesis.service';

describe('NemesisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NemesisService = TestBed.inject(NemesisService);
    expect(service).toBeTruthy();
  });
});
