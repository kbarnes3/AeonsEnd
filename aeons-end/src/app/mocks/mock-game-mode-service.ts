import { BehaviorSubject, Observable } from 'rxjs';
import { GameMode } from '../game-mode';

export class MockGameModeService {
  private selectedGameModeSubject: BehaviorSubject<GameMode>;
  selectedGameMode$: Observable<GameMode>;

  constructor() {
    this.selectedGameModeSubject = new BehaviorSubject<GameMode>(GameMode.SingleGame);
    this.selectedGameMode$ = this.selectedGameModeSubject.asObservable();
  }

  get selectedGameMode(): GameMode {
    return this.selectedGameModeSubject.getValue();
  }

  set selectedGameMode(newSelection: GameMode) {
    this.selectedGameModeSubject.next(newSelection);
  }
}
