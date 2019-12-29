import { Expansion } from '../expansion';
import { BehaviorSubject, Observable } from 'rxjs';

export class MockExpansionSelectionService {
  private selectedExpansionsSubject: BehaviorSubject<Expansion[]>;
  selectedExpansions$: Observable<Expansion[]>;

  constructor() {
    this.selectedExpansionsSubject = new BehaviorSubject<Expansion[]>([ Expansion.Base ]);
    this.selectedExpansions$ = this.selectedExpansionsSubject.asObservable();
  }

  get selectedExpansions(): Expansion[] {
    return this.selectedExpansionsSubject.getValue();
  }

  set selectedExpansions(newSelection: Expansion[]) {
    this.selectedExpansionsSubject.next(newSelection);
  }
}
