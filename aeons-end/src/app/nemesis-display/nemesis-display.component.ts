import { Component, OnInit } from '@angular/core';
import { Nemesis } from '../nemesis';
import { NemesisService } from '../nemesis.service';
import { GameModeService } from '../game-mode.service';
import { GameMode } from '../game-mode';

@Component({
  selector: 'app-nemesis-display',
  templateUrl: './nemesis-display.component.html',
  styleUrls: ['./nemesis-display.component.css']
})
export class NemesisDisplayComponent implements OnInit {
  nemesis: Nemesis;
  battleNumber: number;

  constructor(private gameModeService: GameModeService, private nemesisService: NemesisService) { }

  ngOnInit() {
    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.updateBattleNumber(newGameMode);
    });
    this.updateBattleNumber(this.gameModeService.selectedGameMode);

    this.nemesisService.nemesis$.subscribe((nemesis: Nemesis) => {
      this.nemesis = nemesis;
    });
    this.nemesis = this.nemesisService.nemesis;
  }

  private updateBattleNumber(gameMode: GameMode): void {
    switch (gameMode) {
      case GameMode.ExpeditionStartBattle1:
        this.battleNumber = 1;
        break;
      case GameMode.ExpeditionStartBattle2:
        this.battleNumber = 2;
        break;
      case GameMode.ExpeditionStartBattle3:
        this.battleNumber = 3;
        break;
      case GameMode.ExpeditionStartBattle4:
        this.battleNumber = 4;
        break;
      default:
        this.battleNumber = null;
    }
  }

}
