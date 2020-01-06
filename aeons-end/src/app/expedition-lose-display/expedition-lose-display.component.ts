import { Component, OnInit } from '@angular/core';
import { ExpeditionLoseChoice } from '../game-mode';
import { GameModeService } from '../game-mode.service';

@Component({
  selector: 'app-expedition-lose-display',
  templateUrl: './expedition-lose-display.component.html',
  styleUrls: ['./expedition-lose-display.component.css']
})
export class ExpeditionLoseDisplayComponent implements OnInit {
  loseChoice: ExpeditionLoseChoice;
  loseChoiceEnum = ExpeditionLoseChoice;

  constructor(private gameModeService: GameModeService) { }

  ngOnInit() {
    this.gameModeService.selectedExpeditionLoseChoice$.subscribe((newChoice: ExpeditionLoseChoice) => {
      this.loseChoice = newChoice;
    });
    this.loseChoice = this.gameModeService.selectedExpeditionLoseChoice;
  }

  onChoiceClicked(choice: ExpeditionLoseChoice): void {
    this.gameModeService.selectedExpeditionLoseChoice = choice;
  }

}
