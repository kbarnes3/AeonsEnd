import {TestBed} from '@angular/core/testing';

import {GameModeService} from './game-mode.service';
import {GameMode} from './game-mode';

describe('GameModeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.clear();
  });

  it('should be created', () => {
    const service: GameModeService = TestBed.get(GameModeService);
    expect(service).toBeTruthy();
  });

  it('should start with a default value', () => {
    const service: GameModeService = TestBed.get(GameModeService);
    const selectedGameMode: GameMode = service.selectedGameMode;
    expect(selectedGameMode).toBe(GameMode.SingleGame);
  });

  it('should allow components to update the selected expansions', () => {
    const service: GameModeService = TestBed.get(GameModeService);
    let selectedGameMode: GameMode = service.selectedGameMode;
    service.selectedGameMode$.subscribe((value: GameMode) => {
      selectedGameMode = value;
    });

    service.selectedGameMode = GameMode.ExpeditionStartBattle1;

    expect(selectedGameMode).toBe(GameMode.ExpeditionStartBattle1);
  });

  it('should persist values to local storage', () => {
    const service: GameModeService = TestBed.get(GameModeService);
    service.selectedGameMode = GameMode.ExpeditionLoseBattle1;

    const json = localStorage.getItem('GameMode');
    const storedGameMode: GameMode = JSON.parse(json);
    expect(storedGameMode).toBe(GameMode.ExpeditionLoseBattle1);
  });
});
