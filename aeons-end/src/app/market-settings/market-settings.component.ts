import { Component, OnInit } from '@angular/core';

enum MarketSource {
  All = 1,
  Classic = 2,
  WarEternal = 3
}

@Component({
  selector: 'app-market-settings',
  templateUrl: './market-settings.component.html',
  styleUrls: ['./market-settings.component.css']
})
export class MarketSettingsComponent implements OnInit {

  constructor() { }

  marketSource: MarketSource = MarketSource.All;

  ngOnInit() {
    this.onGenerate();
  }

  onSourceChanged(): void {
    this.onGenerate();
  }

  onGenerate(): void {
  }

}
