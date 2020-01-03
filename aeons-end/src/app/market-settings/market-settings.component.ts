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

  constructor(
    private gameModeService: GameModeService,
    private marketService: MarketService) { }

  ngOnInit(): void {
    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.updateGameMode(newGameMode);
    });
    this.updateGameMode(this.gameModeService.selectedGameMode);
  }

  onSingleGameClicked(): void {
    this.gameModeService.selectedGameMode = GameMode.SingleGame;
  }

  onExpeditionClicked(): void {
    this.gameModeService.selectedGameMode = GameMode.ExpeditionUnknown;
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
  }
}
