import {TestBed} from '@angular/core/testing';
import {Expansion} from './expansion';

import {ExpansionSelectionService} from './expansion-selection.service';

describe('ExpansionSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpansionSelectionService = TestBed.get(ExpansionSelectionService);
    expect(service).toBeTruthy();
  });

  it('should start with a default value', () => {
    const service: ExpansionSelectionService = TestBed.get(ExpansionSelectionService);
    const selectedExpansions: Expansion[] = service.selectedExpansions;
    expect(selectedExpansions.length).toBe(1);
    expect(selectedExpansions[0]).toBe(Expansion.Base);
  });
});
