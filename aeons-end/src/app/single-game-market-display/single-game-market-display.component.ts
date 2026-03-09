import { Component } from '@angular/core';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';

@Component({
    selector: 'app-single-game-market-display',
    imports: [MarketSelectionComponent],
    templateUrl: './single-game-market-display.component.html',
    styleUrls: ['./single-game-market-display.component.css'],
})
export class SingleGameMarketDisplayComponent {
}
