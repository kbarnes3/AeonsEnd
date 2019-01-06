import {Component, OnInit, ViewChild} from '@angular/core';

import {Expansion} from "../expansion";

@Component({
  selector: 'app-market-settings',
  templateUrl: './market-settings.component.html',
  styleUrls: ['./market-settings.component.css']
})
export class MarketSettingsComponent implements OnInit {
  @ViewChild('marketSelection') marketList;

  constructor() { }

  marketSource: Expansion = Expansion.All;

  ngOnInit() {
    this.onGenerate();
  }

  onSourceChanged(): void {
    this.onGenerate();
  }

  onGenerate(): void {
    this.marketList.generateMarket(this.marketSource);
  }

}
