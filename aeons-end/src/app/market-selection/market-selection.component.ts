import {Component, OnInit} from '@angular/core';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../martet-card-type';
import {MarketService} from '../market.service';
import {Expansion} from '../expansion';

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

  generateMarket(marketSources: Expansion[]) {
    this.cards = this.marketService.generateRandomMarket(marketSources);
  }

  getCardCssClass(type: MarketCardType): string {
    switch (type) {
      case MarketCardType.Gem:
        return 'gem-card';
      case MarketCardType.Relic:
        return 'relic-card';
      case MarketCardType.Spell:
        return 'spell-card';
    }
  }

  getCardTypeLabel(type: MarketCardType): string {
    switch (type) {
      case MarketCardType.Gem:
        return 'Spell';
      case MarketCardType.Relic:
        return 'Relic';
      case MarketCardType.Spell:
        return 'Spell';
    }
  }

}
