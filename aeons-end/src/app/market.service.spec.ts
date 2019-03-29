import {TestBed} from '@angular/core/testing';

import {MarketService} from './market.service';
import {MarketCard} from './market-card';
import {Expansion} from './expansion';

describe('MarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketService = TestBed.get(MarketService);
    expect(service).toBeTruthy();
  });

  it('should generate a market with only base cards', () => {
    const service: MarketService = TestBed.get(MarketService);
    const cards: MarketCard[] = service.generateRandomMarket([Expansion.Base]);
    expect(cards.length).toEqual(9);
    cards.forEach((card: MarketCard) => {
      expect(card).toBeTruthy();
      expect(card.expansion).toEqual(Expansion.Base);
    });
  });

  it('should generate a market with War Eternal cards', () => {
    const service: MarketService = TestBed.get(MarketService);
    const cards: MarketCard[] = service.generateRandomMarket([Expansion.WarEternal]);
    expect(cards[0]).toBeTruthy();
    expect(cards[0].expansion).toEqual(Expansion.WarEternal);
    // Note that we don't check all the cards because sometimes this will fail to generate a full market
  });

  it('should use cards from multiple expansions', () => {
    const cards: MarketCard[] = MarketService.getCardsInExpansions([Expansion.WarEternal, Expansion.TheVoid, Expansion.TheDepths]);
    let warEternalSeen = false;
    let theVoidSeen = false;
    let theDepthsSeen = false;

    cards.forEach((card: MarketCard) => {
      switch (card.expansion) {
        case Expansion.WarEternal:
          warEternalSeen = true;
          break;
        case Expansion.TheVoid:
          theVoidSeen = true;
          break;
        case Expansion.TheDepths:
          theDepthsSeen = true;
          break;
      }
    });

    expect(warEternalSeen).toBeTruthy();
    expect(theVoidSeen).toBeTruthy();
    expect(theDepthsSeen).toBeTruthy();
  });
});
