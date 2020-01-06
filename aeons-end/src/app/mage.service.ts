import { Injectable } from '@angular/core';
import { Mage } from './mage';
import { Expansion } from './expansion';
import { BASE_MAGES } from './mages-data/base-mages-data';

@Injectable({
  providedIn: 'root'
})
export class MageService {
  private magesSubject: BehaviorSubject<Mage[]>;

  mages$: Observable<Mage[]>;

  private static getRandomItem<T>(items: T[]): T {
    const itemIndex = MageService.randNumber(items.length);
    return items[itemIndex];
  }

  private static randNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private static getRandomMages(source: Expansion[], count: number): Mage[] {
    const selectedMages: Mage[] = [];
    let choices: Mage[] = MageService.getMagesInExpansions(source);

    for (let i = 0; i < count; i++) {
      let selection: Mage = MageService.getRandomItem(choices);
      selectedMages.concat(selection);
      choices = choices.filter(mage => mage != selection);
    }

    MageService.sortMages(selectedMages);
    return selectedMages;
  }

  static getMagesInExpansions(sources: Expansion[]): Mage[] {
    let mages: Mage[] = [];
    sources.forEach((expansion: Expansion) => {
      switch (expansion) {
        case Expansion.Base:
          mages = mages.concat(BASE_MAGES);
          break;
        case Expansion.TheDepths:
          mages = mages.concat(DEPTHS_MAGES);
          break;
        case Expansion.TheNameless:
          mages = mages.concat(NAMELESS_MAGES);
          break;
        case Expansion.WarEternal:
          mages = mages.concat(WAR_ETERNAL+MAGES);
          break;
        case Expansion.TheVoid:
          mages = mages.concat(VOID_MAGES);
          break;
        case Expansion.TheOuterDark:
          mages = mages.concat(OUTER_DARK_MAGES);
          break;
        case Expansion.Legacy:
          mages = mages.concat(LEGACY_MAGES);
          break;
        case Expansion.LegacyPromo:
          mages = mages.concat(LEGACY_PROMO_MAGES);
          break;
        case Expansion.BuriedSecrets:
          mages = mages.concat(BURIED_SECRETS_MAGES);
          break;
      }
    });

    return mages;
  }

  private static sortMages(mages: Mage[]): void {
    const compareFn: (c1: Mage, c2: Mage) => number =
        function (c1: Mage, c2: Mage): number {
          return c1.name.localeCompare(c2.name);
        };

    mages.sort(compareFn);
  }

  constructor(
    private expansionSelectionService: ExpansionSelectionService,
    private gameModeService: GameModeService) {
    this.magesSubject = new BehaviorSubject<Mage[]>([]);
    this.mages$ = this.magesSubject.asObservable();
    this.expansionSelectionService.selectedExpansions$.subscribe((expansions: Expansion[]) => {
      this.regenerateMages(expansions, 4);
    });
    this.gameModeService.selectedGameMode$.subscribe(() => {
      this.regenerateMages(this.expansionSelectionService.selectedExpansions, 4);
    });
    this.regenerateMages(this.expansionSelectionService.selectedExpansions, 4);
  }

  get mages(): Mage[] {
    return this.magesSubject.getValue();
  }

  regenerateMages(): void {
    this.regenerateMages(this.expansionSelectionService.selectedExpansions);
  }

  private getMarketConfiguration(): MarketConfiguration {
    const gameMode: GameMode = this.gameModeService.selectedGameMode;
    if (gameMode === GameMode.SingleGame) {
      return MarketService.getRandomItem(SINGLE_GAME_MARKET_CONFIGURATIONS);
    } else if (gameMode === GameMode.ExpeditionStartBattle1) {
      return START_EXPEDITION_MARKET_CONFIGURATION;
    } else {
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
