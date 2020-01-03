import {Component, OnInit} from '@angular/core';

import { MarketService } from '../market.service';
import { GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';

@Component({
  selector: 'app-market-settings',
  templateUrl: './market-settings.component.html',
  styleUrls: ['./market-settings.component.css']
})
export class MarketSettingsComponent implements OnInit {
  gameMode: GameMode;
  gameModeEnum = GameMode;
  gameModeString: string;
  expeditionProgressString: string;

  constructor(
    private gameModeService: GameModeService,
    private marketService: MarketService) { }

  ngOnInit(): void {
    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.updateGameMode(newGameMode);
    });
    this.updateGameMode(this.gameModeService.selectedGameMode);
  }

  onGameModeClicked(gameMode: GameMode): void {
    this.gameModeService.selectedGameMode = gameMode;
  }

  onGenerate(): void {
    this.marketService.regenerateMarket();
  }

  private updateGameMode(newGameMode: GameMode): void {
    this.gameMode = newGameMode;
    if (this.gameMode === GameMode.SingleGame) {
      this.gameModeString = 'Single game';
    } else {
      this.gameModeString = 'Expedition';
    }

    if (this.gameMode === GameMode.ExpeditionUnknown) {
      this.expeditionProgressString = 'Choose Battle';
    } else if (this.gameMode === GameMode.ExpeditionStartBattle1) {
      this.expeditionProgressString = 'Start Battle 1';
    } else if (this.gameMode === GameMode.ExpeditionWinBattle1) {
      this.expeditionProgressString = 'Won Battle 1';
    } else if (this.gameMode === GameMode.ExpeditionLoseBattle1) {
      this.expeditionProgressString = 'Lost Battle 1';
    } else if (this.gameMode === GameMode.ExpeditionStartBattle2) {
      this.expeditionProgressString = 'Start Battle 2';
    } else if (this.gameMode === GameMode.ExpeditionWinBattle2) {
      this.expeditionProgressString = 'Won Battle 2';
    } else if (this.gameMode === GameMode.ExpeditionLoseBattle2) {
      this.expeditionProgressString = 'Lost Battle 2';
    } else if (this.gameMode === GameMode.ExpeditionStartBattle3) {
      this.expeditionProgressString = 'Start Battle 3';
    } else if (this.gameMode === GameMode.ExpeditionWinBattle3) {
      this.expeditionProgressString = 'Won Battle 3';
    } else if (this.gameMode === GameMode.ExpeditionLoseBattle3) {
      this.expeditionProgressString = 'Lost Battle 3';
    } else if (this.gameMode === GameMode.ExpeditionStartBattle4) {
      this.expeditionProgressString = 'Start Battle 4';
    } else if (this.gameMode === GameMode.ExpeditionWinBattle4) {
      this.expeditionProgressString = 'Won Battle 4';
    } else if (this.gameMode === GameMode.ExpeditionLoseBattle4) {
      this.expeditionProgressString = 'Lost Battle 4';
    }
  }
}
