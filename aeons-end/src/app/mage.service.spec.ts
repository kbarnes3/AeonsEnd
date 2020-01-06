import { TestBed } from '@angular/core/testing';

import { MageService } from './mage.service';
import { MockExpansionSelectionService } from './mocks/mock-expansion-selection-service';
import { ExpansionSelectionService } from './expansion-selection.service';
import { Mage } from './mage';
import { MockGameModeService } from './mocks/mock-game-mode-service';
import { GameModeService } from './game-mode.service';
import { Expansion } from './expansion';
import { GameMode } from './game-mode';

describe('MageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MageService = TestBed.get(MageService);
    expect(service).toBeTruthy();
  });

  it('should generate mages from base game at the start of an expedition', () => {
    const service: MageService = TestBed.get(MageService);
    const expansionSelectionService: MockExpansionSelectionService = TestBed.get(ExpansionSelectionService);
    const gameModeService: MockGameModeService = TestBed.get(GameModeService);
    gameModeService.selectedGameMode = GameMode.ExpeditionStartBattle1;
    expansionSelectionService.selectedExpansions = [ Expansion.Base ];
    const mages: Mage[] = service.mages;
    expect(mages.length).toEqual(4);
    mages.forEach((mage: Mage) => {
      expect(mage).toBeTruthy();
      expect(mage.expansion).toEqual(Expansion.Base);
    });
  });
});
