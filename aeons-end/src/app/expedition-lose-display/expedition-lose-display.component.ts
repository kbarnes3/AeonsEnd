import { Component, OnInit } from '@angular/core';
import { ExpeditionLoseChoice, GameMode } from '../game-mode';
import { GameModeService } from '../game-mode.service';

@Component({
  selector: 'app-expedition-lose-display',
  templateUrl: './expedition-lose-display.component.html',
  styleUrls: ['./expedition-lose-display.component.css']
})
export class ExpeditionLoseDisplayComponent implements OnInit {
  treasuresUnlocked: boolean;
  loseChoice: ExpeditionLoseChoice;
  loseChoiceEnum = ExpeditionLoseChoice;

  constructor(private gameModeService: GameModeService) { }

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
