import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

import { MarketSource } from '../market-source';

@Component({
  selector: 'app-market-settings',
  templateUrl: './market-settings.component.html',
  styleUrls: ['./market-settings.component.css']
})
export class MarketSettingsComponent implements OnInit {
  @ViewChild('marketSelection') marketList;

  constructor() { }

  marketSource: MarketSource = MarketSource.All;

  ngOnInit() {
    this.onGenerate();
  }

  onSourceChanged(): void {
    this.onGenerate();
  }

  @HostListener('hidden.bs.dropdown')
  onDropdownClosed(): void {
    this.onGenerate();
  }

  onGenerate(): void {
    this.marketList.generateMarket(this.marketSource);
  }

}
