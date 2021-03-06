import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {SINGLE_GAME_MARKET_CONFIGURATIONS, MarketConfiguration, START_EXPEDITION_MARKET_CONFIGURATION, EXPEDITION_WIN_MARKET_CONFIGURATION,
  EXPEDITION_LOSE_CHOOSE_GEM, EXPEDITION_LOSE_CHOOSE_RELIC, EXPEDITION_LOSE_CHOOSE_SPELL} from './market-configuration';
import {MarketCard} from './market-card';
import {Predicate} from './predicates';
import {MarketCardType} from './market-card-type';
import {Expansion} from './expansion';
import { ExpansionSelectionService } from './expansion-selection.service';
import { GameModeService } from './game-mode.service';
import { GameMode, ExpeditionLoseChoice } from './game-mode';
import { ExpansionInfo, EXPANSION_INFO } from './expansion-info';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private marketCardsSubject: BehaviorSubject<MarketCard[]>;

  marketCards$: Observable<MarketCard[]>;

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
      const info: ExpansionInfo = EXPANSION_INFO[expansion];
      cards = cards.concat(info.marketCards);
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

  constructor(
    private expansionSelectionService: ExpansionSelectionService,
    private gameModeService: GameModeService) {
    this.marketCardsSubject = new BehaviorSubject<MarketCard[]>([]);
    this.marketCards$ = this.marketCardsSubject.asObservable();
    this.expansionSelectionService.selectedExpansions$.subscribe((expansions: Expansion[]) => {
      this.generateRandomMarket(expansions);
    });
    this.gameModeService.selectedGameMode$.subscribe(() => {
      this.generateRandomMarket(this.expansionSelectionService.selectedExpansions);
    });
    this.gameModeService.selectedExpeditionLoseChoice$.subscribe(() => {
      this.generateRandomMarket(this.expansionSelectionService.selectedExpansions);
    });
    this.generateRandomMarket(this.expansionSelectionService.selectedExpansions);
  }

  get marketCards(): MarketCard[] {
    return this.marketCardsSubject.getValue();
  }

  regenerateMarket(): void {
    this.generateRandomMarket(this.expansionSelectionService.selectedExpansions);
  }

  private getMarketConfiguration(): MarketConfiguration {
    const gameMode: GameMode = this.gameModeService.selectedGameMode;
    switch (gameMode) {
      case GameMode.SingleGame:
        return MarketService.getRandomItem(SINGLE_GAME_MARKET_CONFIGURATIONS);
      case GameMode.ExpeditionStartBattle1:
        return START_EXPEDITION_MARKET_CONFIGURATION;
      case GameMode.ExpeditionWinBattle1:
      case GameMode.ExpeditionWinBattle2:
      case GameMode.ExpeditionWinBattle3:
        return EXPEDITION_WIN_MARKET_CONFIGURATION;
      case GameMode.ExpeditionLoseBattle1:
      case GameMode.ExpeditionLoseBattle2:
      case GameMode.ExpeditionLoseBattle3:
      case GameMode.ExpeditionLoseBattle4:
        const loseChoice: ExpeditionLoseChoice = this.gameModeService.selectedExpeditionLoseChoice;
        switch (loseChoice) {
          case ExpeditionLoseChoice.AddGem:
            return EXPEDITION_LOSE_CHOOSE_GEM;
          case ExpeditionLoseChoice.AddRelic:
            return EXPEDITION_LOSE_CHOOSE_RELIC;
          case ExpeditionLoseChoice.AddSpell:
            return EXPEDITION_LOSE_CHOOSE_SPELL;
          default:
            return null;
        }
      default:
        return null;
    }
  }

  private generateRandomMarket(source: Expansion[]): void {
    const configuration: MarketConfiguration = this.getMarketConfiguration();
    if (configuration) {
      const newCards: MarketCard[] = MarketService.getCardsInMarket(configuration, source);
      this.marketCardsSubject.next(newCards);
    } else {
      this.marketCardsSubject.next(null);
    }
  }
}
