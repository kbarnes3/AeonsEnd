import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameMode, ExpeditionLoseChoice } from './game-mode';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {
  private initialGameMode: GameMode = GameMode.SingleGame;
  private storageId: string = 'GameMode';
  private selectedGameModeSubject: BehaviorSubject<GameMode>;
  private expeditionLoseChoiceSubject: BehaviorSubject<ExpeditionLoseChoice>;

  selectedGameMode$: Observable<GameMode>;
  selectedExpeditionLoseChoice$: Observable<ExpeditionLoseChoice>;

  constructor() {
    const selectedGameMode: GameMode = this.initializeSelectedGameMode();
    this.selectedGameModeSubject = new BehaviorSubject<GameMode>(selectedGameMode);
    this.selectedGameMode$ = this.selectedGameModeSubject.asObservable();
    this.expeditionLoseChoiceSubject = new BehaviorSubject<ExpeditionLoseChoice>(ExpeditionLoseChoice.NoChoice);
    this.selectedExpeditionLoseChoice$ = this.expeditionLoseChoiceSubject.asObservable();
  }

  private initializeSelectedGameMode(): GameMode {
    const jsonGameMode: string = localStorage.getItem(this.storageId);
    if (!jsonGameMode) {
      return this.initialGameMode;
    } else {
      return JSON.parse(jsonGameMode);
    }
  }

  get selectedGameMode(): GameMode {
    return this.selectedGameModeSubject.getValue();
  }

  set selectedGameMode(newSelection: GameMode) {
    if (newSelection !== this.selectedGameMode) {
      const jsonGameMode: string = JSON.stringify(newSelection);
      localStorage.setItem(this.storageId, jsonGameMode);
      this.selectedGameModeSubject.next(newSelection);

      this.selectedExpeditionLoseChoice = ExpeditionLoseChoice.NoChoice;
    }
  }

  get selectedExpeditionLoseChoice(): ExpeditionLoseChoice {
    return this.expeditionLoseChoiceSubject.getValue();
  }

  set selectedExpeditionLoseChoice(choice: ExpeditionLoseChoice) {
    this.expeditionLoseChoiceSubject.next(choice);
  }
}
