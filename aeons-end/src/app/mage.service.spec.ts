import { TestBed } from '@angular/core/testing';

import { MageService } from './mage.service';

describe('MageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MageService = TestBed.get(MageService);
    expect(service).toBeTruthy();
  });
});
