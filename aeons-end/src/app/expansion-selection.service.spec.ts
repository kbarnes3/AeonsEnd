import {TestBed} from '@angular/core/testing';
import {Expansion} from './expansion';

import {ExpansionSelectionService} from './expansion-selection.service';

describe('ExpansionSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.clear();
  });

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

  it('should allow components to update the selected expansions', () => {
    const service: ExpansionSelectionService = TestBed.get(ExpansionSelectionService);
    service.selectedExpansions = [ Expansion.WarEternal, Expansion.TheVoid ];
    const returnedExpansions: Expansion[] = service.selectedExpansions;
    expect(returnedExpansions.length).toBe(2);
  });

  it('should persist values to local storage', () => {
    const service: ExpansionSelectionService = TestBed.get(ExpansionSelectionService);
    service.selectedExpansions = [ Expansion.Legacy, Expansion.DiceTowerPromo, Expansion.LegacyPromo ];

    const json = localStorage.getItem('Expansions');
    const storedExpansions: Expansion[] = JSON.parse(json);
    expect(storedExpansions.length).toBe(3);
    expect(storedExpansions[0]).toBe(Expansion.Legacy);
    expect(storedExpansions[1]).toBe(Expansion.DiceTowerPromo);
    expect(storedExpansions[2]).toBe(Expansion.LegacyPromo);
  });
});
