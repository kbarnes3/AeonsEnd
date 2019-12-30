import {Component, OnInit, ViewChild} from '@angular/core';

import { MarketService } from '../market.service';

@Component({
  selector: 'app-market-settings',
  templateUrl: './market-settings.component.html',
  styleUrls: ['./market-settings.component.css']
})
export class MarketSettingsComponent {
  constructor(private marketService: MarketService) { }

  onGenerate(): void {
    this.marketService.regenerateMarket();
  }
}
