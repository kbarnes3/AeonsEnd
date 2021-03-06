import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Nemesis } from './nemesis';
import { BASE_NEMESES } from './nemeses-data/base-nemeses-data';
import { NAMELESS_NEMESES } from './nemeses-data/nameless-nemeses-data';
import { WAR_ETERNAL_NEMESES } from './nemeses-data/war-eternal-nemeses-data';
import { VOID_NEMESES } from './nemeses-data/void-nemeses-data';
import { OUTER_DARK_NEMESES } from './nemeses-data/outer-dark-nemeses-data';
import { NEW_AGE_NEMESES } from './nemeses-data/new-age-nemeses-data';
import { SHATTERED_DREAMS_NEMESES } from './nemeses-data/shattered-dreams-nemeses-data';
import { ExpansionSelectionService } from './expansion-selection.service';
import { GameModeService } from './game-mode.service';
import { GameMode } from './game-mode';
import { Expansion } from './expansion';
import { LEGACY_NEMESES } from './nemeses-data/legacy-nemeses-data';
import { ANCIENTS_NEMESES } from './nemeses-data/ancients-nemeses-data';
import { INTO_THE_WILD_NEMESES } from './nemeses-data/into-the-wild-nemeses-data';
import { ExpansionInfo, EXPANSION_INFO } from './expansion-info';


@Injectable({
  providedIn: 'root'
})
export class NemesisService {
  private nemesisSubject: BehaviorSubject<Nemesis>;

  nemesis$: Observable<Nemesis>;

  private static getRandomItem<T>(items: T[]): T {
    const itemIndex = NemesisService.randNumber(items.length);
    return items[itemIndex];
  }

  private static randNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private static getRandomNemesis(source: Expansion[], battle_number: number): Nemesis {
    let choices: Nemesis[] = NemesisService.getNemesesInExpansions(source);
    choices = choices.filter(nemesis => nemesis.battle_number === battle_number);

    return this.getRandomItem(choices);
  }

  static getNemesesInExpansions(sources: Expansion[]): Nemesis[] {
    let nemeses: Nemesis[] = [];
    sources.forEach((expansion: Expansion) => {
      const info: ExpansionInfo = EXPANSION_INFO[expansion];
      if (info.nemeses) {
        nemeses = nemeses.concat(info.nemeses);
      }
    });

    return nemeses;
  }

  constructor(
    private expansionSelectionService: ExpansionSelectionService,
    private gameModeService: GameModeService) {
    this.nemesisSubject = new BehaviorSubject<Nemesis>(BASE_NEMESES[0]);
    this.nemesis$ = this.nemesisSubject.asObservable();
    this.expansionSelectionService.selectedExpansions$.subscribe((expansions: Expansion[]) => {
      this.generateRandomNemesis(expansions);
    });
    this.gameModeService.selectedGameMode$.subscribe(() => {
      this.generateRandomNemesis(this.expansionSelectionService.selectedExpansions);
    });
    this.generateRandomNemesis(this.expansionSelectionService.selectedExpansions);
  }

  get nemesis(): Nemesis {
    return this.nemesisSubject.getValue();
  }

  regenerateNemesis(): void {
    this.generateRandomNemesis(this.expansionSelectionService.selectedExpansions);
  }

  private generateRandomNemesis(source: Expansion[]): void {
    const gameMode: GameMode = this.gameModeService.selectedGameMode;
    switch (gameMode) {
      case GameMode.ExpeditionStartBattle1:
        this.nemesisSubject.next(NemesisService.getRandomNemesis(source, 1));
        break;
      case GameMode.ExpeditionStartBattle2:
        this.nemesisSubject.next(NemesisService.getRandomNemesis(source, 2));
        break;
      case GameMode.ExpeditionStartBattle3:
        this.nemesisSubject.next(NemesisService.getRandomNemesis(source, 3));
        break;
      case GameMode.ExpeditionStartBattle4:
        this.nemesisSubject.next(NemesisService.getRandomNemesis(source, 4));
        break;
      default:
        this.nemesisSubject.next(null);
        break;
    }
  }
}
