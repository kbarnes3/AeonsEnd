import { Component, OnInit, inject } from '@angular/core';
import { GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';

import { SingleGameMarketDisplayComponent } from '../single-game-market-display/single-game-market-display.component';
import { ExpeditionUnknownDisplayComponent } from '../expedition-unknown-display/expedition-unknown-display.component';
import { StartExpeditionBarracksDisplayComponent } from '../start-expedition-barracks-display/start-expedition-barracks-display.component';
import { ExpeditionStartBattleDisplayComponent } from '../expedition-start-battle-display/expedition-start-battle-display.component';
import { ExpeditionWinDisplayComponent } from '../expedition-win-display/expedition-win-display.component';
import { FinishExpeditionDisplayComponent } from '../finish-expedition-display/finish-expedition-display.component';
import { ExpeditionLoseDisplayComponent } from '../expedition-lose-display/expedition-lose-display.component';

@Component({
    selector: 'app-market-display',
    imports: [
    SingleGameMarketDisplayComponent,
    ExpeditionUnknownDisplayComponent,
    StartExpeditionBarracksDisplayComponent,
    ExpeditionStartBattleDisplayComponent,
    ExpeditionWinDisplayComponent,
    FinishExpeditionDisplayComponent,
    ExpeditionLoseDisplayComponent
],
    templateUrl: './market-display.component.html',
    styleUrls: ['./market-display.component.css'],
})
export class MarketDisplayComponent implements OnInit {
  private gameModeService = inject(GameModeService);

  gameMode!: GameMode;
  gameModeEnum = GameMode;

  ngOnInit() {
    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.gameMode = newGameMode;
    });
    this.gameMode = this.gameModeService.selectedGameMode;
  }

}
