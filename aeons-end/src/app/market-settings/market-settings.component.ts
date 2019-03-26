import {Component, OnInit, ViewChild} from '@angular/core';

import { Expansion } from '../expansion';

@Component({
  selector: 'app-market-settings',
  templateUrl: './market-settings.component.html',
  styleUrls: ['./market-settings.component.css']
})
export class MarketSettingsComponent implements OnInit {
  @ViewChild('marketSelection') marketList;
  @ViewChild('expansionChooser') expansionChooser;

  constructor() { }

  private lastMarketSources: Expansion[] = [];

  ngOnInit() {
    this.onGenerate();
  }

  onSourceChanged(): void {
    this.onGenerate();
  }

  onDropdownChanged(opened:boolean): void {
    if (!opened) {
      this.onGenerate();
    }
  }

  onGenerate(): void {
    this.lastMarketSources = this.expansionChooser.getSelectedExpansions();
    this.marketList.generateMarket(this.lastMarketSources);
  }

}
