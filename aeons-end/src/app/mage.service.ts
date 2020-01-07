import { Injectable } from '@angular/core';
import { Mage } from './mage';
import { Expansion } from './expansion';
import { BASE_MAGES } from './mages-data/base-mages-data';
import { GameMode, ExpeditionLoseChoice } from './game-mode';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEPTHS_MAGES } from './mages-data/depths-mages-data';
import { NAMELESS_MAGES } from './mages-data/nameless-mages-data';
import { WAR_ETERNAL_MAGES } from './mages-data/war-eternal-mages-data';
import { VOID_MAGES } from './mages-data/void-mages-data';
import { OUTER_DARK_MAGES } from './mages-data/outer-dark-mages-data';
import { ExpansionSelectionService } from './expansion-selection.service';
import { GameModeService } from './game-mode.service';
import { NEW_AGE_MAGES } from './mages-data/new-age-mages-data';
import { SHATTERED_DREAMS_MAGES } from './mages-data/shattered-dreams-mages-data';

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
      const selection: Mage = MageService.getRandomItem(choices);
      selectedMages.push(selection);
      choices = choices.filter(mage => mage !== selection);
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
          mages = mages.concat(WAR_ETERNAL_MAGES);
          break;
        case Expansion.TheVoid:
          mages = mages.concat(VOID_MAGES);
          break;
        case Expansion.TheOuterDark:
          mages = mages.concat(OUTER_DARK_MAGES);
          break;
        case Expansion.TheNewAge:
          mages = mages.concat(NEW_AGE_MAGES);
          break;
        case Expansion.ShatteredDreams:
          mages = mages.concat(SHATTERED_DREAMS_MAGES);
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
      this.generateRandomMages(expansions);
    });
    this.gameModeService.selectedGameMode$.subscribe(() => {
      this.generateRandomMages(this.expansionSelectionService.selectedExpansions);
    });
    this.gameModeService.selectedExpeditionLoseChoice$.subscribe(() => {
      this.generateRandomMages(this.expansionSelectionService.selectedExpansions);
    });
    this.generateRandomMages(this.expansionSelectionService.selectedExpansions);
  }

  get mages(): Mage[] {
    return this.magesSubject.getValue();
  }

  regenerateMages(): void {
    this.generateRandomMages(this.expansionSelectionService.selectedExpansions);
  }

  private generateRandomMages(source: Expansion[]): void {
    const gameMode: GameMode = this.gameModeService.selectedGameMode;
    let newMages: Mage[];

    switch (gameMode) {
      case GameMode.ExpeditionStartBattle1:
        newMages = MageService.getRandomMages(source, 4);
        this.magesSubject.next(newMages);
        break;
      case GameMode.ExpeditionLoseBattle1:
      case GameMode.ExpeditionLoseBattle2:
      case GameMode.ExpeditionLoseBattle3:
      case GameMode.ExpeditionLoseBattle4:
        if (this.gameModeService.selectedExpeditionLoseChoice === ExpeditionLoseChoice.AddMage) {
          newMages = MageService.getRandomMages(source, 1);
          this.magesSubject.next(newMages);
        } else {
          this.magesSubject.next(null);
        }
        break;
      default:
        this.magesSubject.next(null);
        break;
    }
  }
}
