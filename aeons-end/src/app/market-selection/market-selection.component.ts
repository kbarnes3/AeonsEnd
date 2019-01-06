import { Component, OnInit } from '@angular/core';
import { MarketCard } from "../market-card";
import { MarketSource } from "../market-source";
import { MarketService } from "../market.service";

@Component({
  selector: 'app-market-selection',
  templateUrl: './market-selection.component.html',
  styleUrls: ['./market-selection.component.css']
})
export class MarketSelectionComponent implements OnInit {

  constructor(private marketService: MarketService) { }

  cards: MarketCard[];

  ngOnInit() {
  }

  generateMarket(marketSource: MarketSource) {
    this.cards = this.marketService.generateRandomMarket(marketSource);
  }

}
