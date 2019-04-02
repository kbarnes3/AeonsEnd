import {Injectable} from '@angular/core';
import {ALL_MAKRET_CONFIGURATIONS, MarketConfiguration} from './market-configuration';
import {MarketCard} from './market-card';
import {Predicate} from './predicates';
import {MarketCardType} from './martet-card-type';
import {Expansion} from './expansion';

import {BASE_CARDS} from './cards-data/base-cards-data';
import {DEPTHS_CARDS} from './cards-data/depths-cards-data';
import {NAMELESS_CARDS} from './cards-data/nameless-cards-data';
import {WAR_ETERNAL_CARDS} from './cards-data/war-eternal-cards-data';
import {VOID_CARDS} from './cards-data/void-cards-data';
import {OUTER_DARK_CARDS} from './cards-data/outer-dark-cards-data';
import {LEGACY_CARDS} from './cards-data/legacy-cards-data';
import {BURIED_SECRETS_CARDS} from './cards-data/buried-secrets-cards-data';
import {DICE_TOWER_PROMO_CARDS} from './cards-data/dice-tower-promo-cards-data';

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

  private static getCardsInMarket(configuration: MarketConfiguration, source: Expansion[]): MarketCard[] {
    const deck: MarketCard[] = MarketService.getCardsInExpansions(source);
    const returnedCards: MarketCard[] = [];

    configuration.cards.forEach(function(value: Predicate) {
      const eligibleCards: MarketCard[] = MarketService.getMatchingCards(value, deck, returnedCards);
      const pickedCard: MarketCard = MarketService.getRandomItem(eligibleCards);
      if (pickedCard) {
        returnedCards.push(pickedCard);
      }
    });

    MarketService.sortCards(returnedCards);
    return returnedCards;
  }

  static getCardsInExpansions(sources: Expansion[]): MarketCard[] {
    let cards: MarketCard[] = [];
    sources.forEach((expansion: Expansion) => {
      switch (expansion) {
        case Expansion.Base:
          cards = cards.concat(BASE_CARDS);
          break;
        case Expansion.TheDepths:
          cards = cards.concat(DEPTHS_CARDS);
          break;
        case Expansion.TheNameless:
          cards = cards.concat(NAMELESS_CARDS);
          break;
        case Expansion.WarEternal:
          cards = cards.concat(WAR_ETERNAL_CARDS);
          break;
        case Expansion.TheVoid:
          cards = cards.concat(VOID_CARDS);
          break;
        case Expansion.TheOuterDark:
          cards = cards.concat(OUTER_DARK_CARDS);
          break;
        case Expansion.Legacy:
          cards = cards.concat(LEGACY_CARDS);
          break;
        case Expansion.BuriedSecrets:
          cards = cards.concat(BURIED_SECRETS_CARDS);
          break;
        case Expansion.DiceTowerPromo:
          cards = cards.concat(DICE_TOWER_PROMO_CARDS);
          break;
      }
    });

    return cards;
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

  generateRandomMarket(source: Expansion[]): MarketCard[] {
    const configuration: MarketConfiguration = MarketService.getRandomItem(ALL_MAKRET_CONFIGURATIONS);
    return MarketService.getCardsInMarket(configuration, source);
  }
}
