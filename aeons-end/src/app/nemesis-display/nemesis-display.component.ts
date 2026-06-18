import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Nemesis } from '../nemesis';
import { NemesisService } from '../nemesis.service';
import { GameModeService } from '../game-mode.service';
import { GameMode } from '../game-mode';

interface NemesisDeckRow {
  cards: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

const NEMESIS_DECKS: Record<number, NemesisDeckRow[]> = {
  1: [
    { cards: 'Tier 1', p1: '1 / 0', p2: '3 / 0', p3: '5 / 0', p4: '8 / 0' },
    { cards: 'Tier 2', p1: '3 / 0', p2: '5 / 0', p3: '6 / 0', p4: '7 / 0' },
    { cards: 'Tier 3', p1: '7 / 0', p2: '7 / 0', p3: '7 / 0', p4: '7 / 0' },
  ],
  2: [
    { cards: 'Tier 1', p1: '0 / 1', p2: '2 / 1', p3: '4 / 1', p4: '7 / 1' },
    { cards: 'Tier 2', p1: '0 / 3', p2: '2 / 3', p3: '3 / 3', p4: '4 / 3' },
    { cards: 'Tier 3', p1: '4 / 3', p2: '4 / 3', p3: '4 / 3', p4: '4 / 3' },
  ],
  3: [
    { cards: 'Tier 1', p1: '0 / 1', p2: '1 / 2', p3: '3 / 2', p4: '6 / 2' },
    { cards: 'Tier 2', p1: '0 / 3', p2: '1 / 4', p3: '2 / 4', p4: '3 / 4' },
    { cards: 'Tier 3', p1: '2 / 5', p2: '2 / 5', p3: '2 / 5', p4: '2 / 5' },
  ],
  4: [
    { cards: 'Tier 1', p1: '0 / 1', p2: '0 / 3', p3: '2 / 3', p4: '5 / 3' },
    { cards: 'Tier 2', p1: '0 / 3', p2: '0 / 5', p3: '1 / 5', p4: '2 / 5' },
    { cards: 'Tier 3', p1: '0 / 7', p2: '0 / 7', p3: '0 / 7', p4: '0 / 7' },
  ],
};

@Component({
    selector: 'app-nemesis-display',
    imports: [MatTableModule],
    templateUrl: './nemesis-display.component.html',
    styleUrls: ['./nemesis-display.component.css'],
})
export class NemesisDisplayComponent implements OnInit {
  private gameModeService = inject(GameModeService);
  private nemesisService = inject(NemesisService);

  nemesis: Nemesis;
  battleNumber: number;
  displayedColumns: string[] = ['cards', 'p1', 'p2', 'p3', 'p4'];
  nemesisDeck: NemesisDeckRow[] = [];

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
    this.nemesisDeck = NEMESIS_DECKS[this.battleNumber] ?? [];
  }

}
