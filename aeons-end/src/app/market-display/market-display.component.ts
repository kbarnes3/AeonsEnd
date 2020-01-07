import { Component, OnInit } from '@angular/core';
import { GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';

@Component({
  selector: 'app-market-display',
  templateUrl: './market-display.component.html',
  styleUrls: ['./market-display.component.css']
})
export class MarketDisplayComponent implements OnInit {
  gameMode: GameMode;
  gameModeEnum = GameMode;

  constructor(private gameModeService: GameModeService) { }

  ngOnInit() {
    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.gameMode = newGameMode;
    });
    this.gameMode = this.gameModeService.selectedGameMode;
  }

}
