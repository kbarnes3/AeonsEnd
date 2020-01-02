import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameMode } from './game-mode';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {
  private initialGameMode: GameMode = GameMode.SingleGame;
  private storageId: string = 'GameMode';
  private selectedGameModeSubject: BehaviorSubject<GameMode>;

  selectedGameMode$: Observable<GameMode>;

  constructor() {
    const selectedGameMode: GameMode = this.initializeSelectedGameMode();
    this.selectedGameModeSubject = new BehaviorSubject<GameMode>(selectedGameMode);
    this.selectedGameMode$ = this.selectedGameModeSubject.asObservable();
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
    const jsonGameMode: string = JSON.stringify(newSelection);
    localStorage.setItem(this.storageId, jsonGameMode);
    this.selectedGameModeSubject.next(newSelection);
  }
}
