
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MarketService } from '../market.service';
import { GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';
import { MageService } from '../mage.service';
import { NemesisService } from '../nemesis.service';
import { ExpansionChooserComponent } from '../expansion-chooser/expansion-chooser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-market-settings',
    imports: [ExpansionChooserComponent, NgbModule],
    templateUrl: './market-settings.component.html',
    styleUrls: ['./market-settings.component.css'],
})
export class MarketSettingsComponent {
  private gameModeService = inject(GameModeService);
  private marketService = inject(MarketService);
  private mageService = inject(MageService);
  private nemesisService = inject(NemesisService);

  gameMode = toSignal(this.gameModeService.selectedGameMode$, { initialValue: this.gameModeService.selectedGameMode });
  gameModeEnum = GameMode;

  gameModeString = computed(() => {
    return this.gameMode() === GameMode.SingleGame ? 'Single game' : 'Expedition';
  });

  expeditionProgressString = computed(() => {
    const mode = this.gameMode();
    switch (mode) {
      case GameMode.ExpeditionUnknown: return 'Choose Battle';
      case GameMode.ExpeditionStartBattle1: return 'Start Battle 1';
      case GameMode.ExpeditionWinBattle1: return 'Won Battle 1';
      case GameMode.ExpeditionLoseBattle1: return 'Lost Battle 1';
      case GameMode.ExpeditionStartBattle2: return 'Start Battle 2';
      case GameMode.ExpeditionWinBattle2: return 'Won Battle 2';
      case GameMode.ExpeditionLoseBattle2: return 'Lost Battle 2';
      case GameMode.ExpeditionStartBattle3: return 'Start Battle 3';
      case GameMode.ExpeditionWinBattle3: return 'Won Battle 3';
      case GameMode.ExpeditionLoseBattle3: return 'Lost Battle 3';
      case GameMode.ExpeditionStartBattle4: return 'Start Battle 4';
      case GameMode.ExpeditionWinBattle4: return 'Won Battle 4';
      case GameMode.ExpeditionLoseBattle4: return 'Lost Battle 4';
      default: return '';
    }
  });

  onGameModeClicked(gameMode: GameMode): void {
    this.gameModeService.selectedGameMode = gameMode;
  }

  onGenerate(): void {
    this.marketService.regenerateMarket();
    this.mageService.regenerateMages();
    this.nemesisService.regenerateNemesis();
  }
}
