import { Component, OnInit, inject } from '@angular/core';
import { GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';


@Component({
    selector: 'app-expedition-win-display',
    imports: [MarketSelectionComponent],
    templateUrl: './expedition-win-display.component.html',
    styleUrls: ['./expedition-win-display.component.css'],
})
export class ExpeditionWinDisplayComponent implements OnInit {
  private gameModeService = inject(GameModeService);

  expeditionNumber: number;

  ngOnInit() {
    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.updateExpeditionNumber(newGameMode);
    });
    this.updateExpeditionNumber(this.gameModeService.selectedGameMode);
  }

  updateExpeditionNumber(gameMode: GameMode): void {
    if (gameMode === GameMode.ExpeditionWinBattle1) {
      this.expeditionNumber = 1;
    } else if (gameMode === GameMode.ExpeditionWinBattle2) {
      this.expeditionNumber = 2;
    } else if (gameMode === GameMode.ExpeditionWinBattle3) {
      this.expeditionNumber = 3;
    } else {
      this.expeditionNumber = 0;
    }
  }

}
