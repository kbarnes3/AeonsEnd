import {Injectable} from '@angular/core';
import {BASE_CARDS} from "./base-cards-data";
import {ALL_MAKRET_CONFIGURATIONS, MarketConfiguration} from "./market-configuration";
import {MarketSource} from "./market-source";
import {MarketCard} from "./market-card";
import {Predicate} from "./predicates";
import {MarketCardType} from "./martet-card-type";
import {WAR_ETERNAL_CARDS} from "./war-eternal-cards-data";

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() { }

  generateRandomMarket(source:MarketSource):MarketCard[] {
    let configuration:MarketConfiguration = MarketService.getRandomItem(ALL_MAKRET_CONFIGURATIONS);
    return MarketService.getCardsInMarket(configuration, source);
  }

  private static getRandomItem<T>(items:T[]):T {
    let itemIndex = MarketService.randNumber(items.length);
    return items[itemIndex];
  }

  private static randNumber(max:number):number {
    return Math.floor(Math.random() * max);
  }

  private static getCardsInMarket(configuration:MarketConfiguration, source:MarketSource):MarketCard[] {
    let deck:MarketCard[] = MarketService.getCardsInExpansions(source);
    let returnedCards:MarketCard[] = [];

    configuration.cards.forEach(function(value:Predicate) {
      let eligibleCards:MarketCard[] = MarketService.getMatchingCards(value, deck, returnedCards);
      let pickedCard:MarketCard = MarketService.getRandomItem(eligibleCards);
      returnedCards.push(pickedCard);
    });

    MarketService.sortCards(returnedCards);
    return returnedCards;
  }

  private static getCardsInExpansions(source:MarketSource):MarketCard[] {
    switch (source) {
      case MarketSource.All:
        let allCards:MarketCard[] = BASE_CARDS.concat(WAR_ETERNAL_CARDS);
        return allCards;

      case MarketSource.BasePlusExpansions:
        return Object.assign([], BASE_CARDS);

      case MarketSource.WarEternalPlusExpansions:
        return Object.assign([], WAR_ETERNAL_CARDS);

      default:
        debugger;
        return [];
    }

  }

  private static getMatchingCards(predicate:Predicate, deck:MarketCard[], usedCards:MarketCard[]) {
    let matchingCards:MarketCard[] = [];
    deck.forEach(function(value:MarketCard) {
      if (predicate(value)) {
        if (usedCards.indexOf(value) === -1) {
          matchingCards.push(value);
        }
      }
    });

    return matchingCards;
  }

  private static sortCards(cards:MarketCard[]):void {
    // Sorts first by type, then cost, and finally by name
    let compareFn:(c1:MarketCard, c2:MarketCard)=>number =
        function (c1:MarketCard, c2:MarketCard):number {
          let typeOrder:MarketCardType[] = [MarketCardType.Gem, MarketCardType.Relic, MarketCardType.Spell];
          if (c1.type === c2.type) {
            if (c1.cost === c2.cost) {
              return c1.name.localeCompare(c2.name);
            }
            return c1.cost - c2.cost;
          }
          let c1TypeIndex:number = typeOrder.indexOf(c1.type);
          let c2TypeIndex:number = typeOrder.indexOf(c2.type);
          return c1TypeIndex - c2TypeIndex;
        };

    cards.sort(compareFn);
  }
}
