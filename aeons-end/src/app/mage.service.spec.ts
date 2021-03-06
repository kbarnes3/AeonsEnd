import { TestBed } from '@angular/core/testing';

import { MageService } from './mage.service';
import { MockExpansionSelectionService } from './mocks/mock-expansion-selection-service';
import { ExpansionSelectionService } from './expansion-selection.service';
import { Mage } from './mage';
import { MockGameModeService } from './mocks/mock-game-mode-service';
import { GameModeService } from './game-mode.service';
import { Expansion } from './expansion';
import { GameMode, ExpeditionLoseChoice } from './game-mode';

describe('MageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ExpansionSelectionService, useClass: MockExpansionSelectionService },
      { provide: GameModeService, useClass: MockGameModeService },
    ]
  }));

  it('should be created', () => {
    const service: MageService = TestBed.inject(MageService);
    expect(service).toBeTruthy();
  });

  it('should generate mages from base game at the start of an expedition', () => {
    const service: MageService = TestBed.inject(MageService);
    const expansionSelectionService: MockExpansionSelectionService =
      <MockExpansionSelectionService><any>TestBed.inject(ExpansionSelectionService);
    const gameModeService: MockGameModeService = <MockGameModeService><any>TestBed.inject(GameModeService);
    gameModeService.selectedGameMode = GameMode.ExpeditionStartBattle1;
    expansionSelectionService.selectedExpansions = [ Expansion.Base ];
    const mages: Mage[] = service.mages;
    expect(mages.length).toEqual(4);
    mages.forEach((mage: Mage) => {
      expect(mage).toBeTruthy();
      expect(mage.expansion).toEqual(Expansion.Base);
    });
  });

  it('should generate a single mage when losing a battle', () => {
    const service: MageService = TestBed.inject(MageService);
    const expansionSelectionService: MockExpansionSelectionService =
      <MockExpansionSelectionService><any>TestBed.inject(ExpansionSelectionService);
    const gameModeService: MockGameModeService = <MockGameModeService><any>TestBed.inject(GameModeService);
    gameModeService.selectedGameMode = GameMode.ExpeditionLoseBattle1;
    gameModeService.selectedExpeditionLoseChoice = ExpeditionLoseChoice.AddMage;
    expansionSelectionService.selectedExpansions = [ Expansion.Base ];
    const mages: Mage[] = service.mages;
    expect(mages.length).toEqual(1);
  });
});
