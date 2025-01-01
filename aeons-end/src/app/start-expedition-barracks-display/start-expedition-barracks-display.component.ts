import { Component, OnInit } from '@angular/core';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';
import { MageDisplayComponent } from '../mage-display/mage-display.component';
import { NemesisDisplayComponent } from '../nemesis-display/nemesis-display.component';

@Component({
    selector: 'app-start-expedition-barracks-display',
    imports: [MarketSelectionComponent, MageDisplayComponent, NemesisDisplayComponent],
    templateUrl: './start-expedition-barracks-display.component.html',
    styleUrls: ['./start-expedition-barracks-display.component.css'],
})
export class StartExpeditionBarracksDisplayComponent {

  constructor() { }

}
