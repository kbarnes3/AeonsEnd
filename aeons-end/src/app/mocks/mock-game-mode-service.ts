import { BehaviorSubject, Observable } from 'rxjs';
import { GameMode, ExpeditionLoseChoice } from '../game-mode';

export class MockGameModeService {
  private selectedGameModeSubject: BehaviorSubject<GameMode>;
  private expeditionLoseChoiceSubject: BehaviorSubject<ExpeditionLoseChoice>;
  selectedGameMode$: Observable<GameMode>;
  selectedExpeditionLoseChoice$: Observable<ExpeditionLoseChoice>;


  constructor() {
    this.selectedGameModeSubject = new BehaviorSubject<GameMode>(GameMode.SingleGame);
    this.selectedGameMode$ = this.selectedGameModeSubject.asObservable();
    this.expeditionLoseChoiceSubject = new BehaviorSubject<ExpeditionLoseChoice>(ExpeditionLoseChoice.NoChoice);
    this.selectedExpeditionLoseChoice$ = this.expeditionLoseChoiceSubject.asObservable();
  }

  get selectedGameMode(): GameMode {
    return this.selectedGameModeSubject.getValue();
  }

  set selectedGameMode(newSelection: GameMode) {
    if (newSelection !== this.selectedGameMode) {
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
