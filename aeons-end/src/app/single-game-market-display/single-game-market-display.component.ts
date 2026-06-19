import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';

interface NemesisDeckRow {
  cards: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

@Component({
    selector: 'app-single-game-market-display',
    imports: [MarketSelectionComponent, MatTableModule],
    templateUrl: './single-game-market-display.component.html',
    styleUrls: ['./single-game-market-display.component.css'],
})
export class SingleGameMarketDisplayComponent {
  displayedColumns: string[] = ['cards', 'p1', 'p2', 'p3', 'p4'];

  nemesisDeck: NemesisDeckRow[] = [
    { cards: 'Tier 1', p1: '1', p2: '3', p3: '5', p4: '8' },
    { cards: 'Tier 2', p1: '3', p2: '5', p3: '6', p4: '7' },
    { cards: 'Tier 3', p1: '7', p2: '7', p3: '7', p4: '7' },
  ];
}
