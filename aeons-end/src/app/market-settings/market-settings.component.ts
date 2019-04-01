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

  onDropdownChanged(opened: boolean): void {
    if (!opened) {
      const newMarketSources: Expansion[] = this.expansionChooser.getSelectedExpansions();
      if (!this.areMarketSourcesEqual(newMarketSources)) {
        this.onGenerate();
      }
    }
  }

  onGenerate(): void {
    this.lastMarketSources = this.expansionChooser.getSelectedExpansions();
    this.marketList.generateMarket(this.lastMarketSources);
  }

  private areMarketSourcesEqual(newMarketSources: Expansion[]): boolean {
    if (newMarketSources.length !== this.lastMarketSources.length) {
      return false;
    }

    for (let i = 0; i < this.lastMarketSources.length; i++) {
      if (newMarketSources[i] !== this.lastMarketSources[i]) {
        return false;
      }
    }

    return true;
  }

}
