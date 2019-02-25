import {Injectable} from '@angular/core';
import {BASE_CARDS} from './cards-data/base-cards-data';
import {DEPTHS_CARDS} from './cards-data/depths-cards-data';
import {NAMELESS_CARDS} from './cards-data/nameless-cards-data';
import {ALL_MAKRET_CONFIGURATIONS, MarketConfiguration} from './market-configuration';
import {MarketSource} from './market-source';
import {MarketCard} from './market-card';
import {Predicate} from './predicates';
import {MarketCardType} from './martet-card-type';
import {WAR_ETERNAL_CARDS} from './cards-data/war-eternal-cards-data';
import {PROMO_CARDS} from './cards-data/promo-cards-data';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

  private static getRandomItem<T>(items: T[]): T {
    const itemIndex = MarketService.randNumber(items.length);
    return items[itemIndex];
  }

  private static randNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private static getCardsInMarket(configuration: MarketConfiguration, source: MarketSource): MarketCard[] {
    const deck: MarketCard[] = MarketService.getCardsInExpansions(source);
    const returnedCards: MarketCard[] = [];

    configuration.cards.forEach(function(value: Predicate) {
      const eligibleCards: MarketCard[] = MarketService.getMatchingCards(value, deck, returnedCards);
      const pickedCard: MarketCard = MarketService.getRandomItem(eligibleCards);
      returnedCards.push(pickedCard);
    });

    MarketService.sortCards(returnedCards);
    return returnedCards;
  }

  private static getCardsInExpansions(source: MarketSource): MarketCard[] {
    switch (source) {
      case MarketSource.All:
        return BASE_CARDS.concat(DEPTHS_CARDS, NAMELESS_CARDS, WAR_ETERNAL_CARDS, PROMO_CARDS);

      case MarketSource.BasePlusExpansions:
        return BASE_CARDS.concat(DEPTHS_CARDS, NAMELESS_CARDS);

      case MarketSource.WarEternalPlusExpansions:
        return Object.assign([], WAR_ETERNAL_CARDS);

      default:
        return [];
    }

  }

  private static getMatchingCards(predicate: Predicate, deck: MarketCard[], usedCards: MarketCard[]) {
    const matchingCards: MarketCard[] = [];
    deck.forEach(function(value: MarketCard) {
      if (predicate(value)) {
        if (usedCards.indexOf(value) === -1) {
          matchingCards.push(value);
        }
      }
    });

    return matchingCards;
  }

  private static sortCards(cards: MarketCard[]): void {
    // Sorts first by type, then cost, and finally by name
    const compareFn: (c1: MarketCard, c2: MarketCard) => number =
        function (c1: MarketCard, c2: MarketCard): number {
          const typeOrder: MarketCardType[] = [MarketCardType.Gem, MarketCardType.Relic, MarketCardType.Spell];
          if (c1.type === c2.type) {
            if (c1.cost === c2.cost) {
              return c1.name.localeCompare(c2.name);
            }
            return c1.cost - c2.cost;
          }
          const c1TypeIndex: number = typeOrder.indexOf(c1.type);
          const c2TypeIndex: number = typeOrder.indexOf(c2.type);
          return c1TypeIndex - c2TypeIndex;
        };

    cards.sort(compareFn);
  }

  generateRandomMarket(source: MarketSource): MarketCard[] {
    const configuration: MarketConfiguration = MarketService.getRandomItem(ALL_MAKRET_CONFIGURATIONS);
    return MarketService.getCardsInMarket(configuration, source);
  }
}
