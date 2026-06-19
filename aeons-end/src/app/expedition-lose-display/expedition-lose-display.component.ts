import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ExpeditionLoseChoice, GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';
import { MageDisplayComponent } from '../mage-display/mage-display.component';

@Component({
    selector: 'app-expedition-lose-display',
    imports: [MatButtonModule, MarketSelectionComponent, MageDisplayComponent],
    templateUrl: './expedition-lose-display.component.html',
    styleUrls: ['./expedition-lose-display.component.css'],
})
export class ExpeditionLoseDisplayComponent implements OnInit {
  private gameModeService = inject(GameModeService);

  treasuresUnlocked!: boolean;
  loseChoice!: ExpeditionLoseChoice;
  loseChoiceEnum = ExpeditionLoseChoice;

  ngOnInit() {
    this.gameModeService.selectedGameMode$.subscribe((newMode: GameMode) => {
      this.treasuresUnlocked = (newMode !== GameMode.ExpeditionLoseBattle1);
    });
    this.treasuresUnlocked = (this.gameModeService.selectedGameMode !== GameMode.ExpeditionLoseBattle1);
    this.gameModeService.selectedExpeditionLoseChoice$.subscribe((newChoice: ExpeditionLoseChoice) => {
      this.loseChoice = newChoice;
    });
    this.loseChoice = this.gameModeService.selectedExpeditionLoseChoice;
  }

  onChoiceClicked(choice: ExpeditionLoseChoice): void {
    this.gameModeService.selectedExpeditionLoseChoice = choice;
  }

}
