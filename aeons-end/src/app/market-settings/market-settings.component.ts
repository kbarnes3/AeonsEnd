import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MarketService } from '../market.service';
import { GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';
import { MageService } from '../mage.service';
import { NemesisService } from '../nemesis.service';
import { ExpansionChooserComponent } from '../expansion-chooser/expansion-chooser.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-market-settings',
    imports: [ExpansionChooserComponent, MatFormFieldModule, MatSelectModule, MatButtonModule],
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

  expansionOpen = false;

  onGameModeClicked(gameMode: GameMode): void {
    this.gameModeService.selectedGameMode = gameMode;
  }

  onGenerate(): void {
    this.marketService.regenerateMarket();
    this.mageService.regenerateMages();
    this.nemesisService.regenerateNemesis();
  }
}
