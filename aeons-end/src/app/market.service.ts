import { Injectable } from '@angular/core';
import {BASE_CARDS} from "./base-cards-data";
import {MarketConfiguration, ALL_MAKRET_CONFIGURATIONS} from "./market-configuration";
import {MarketSource} from "./market-source";
import {MarketCard} from "./market-card";
import {Predicate} from "./predicates";

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

    return returnedCards;
  }

  private static getCardsInExpansions(source:MarketSource):MarketCard[] {
    return Object.assign([], BASE_CARDS);
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
}
