import {Injectable} from '@angular/core';
import {Expansion} from './expansion';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpansionSelectionService {
  private initalExpansionSelection: Expansion[] = [ Expansion.Base ];
  private storageId = 'Expansions';
  private selectedExpansionsSubject: BehaviorSubject<Expansion[]>;

  selectedExpansions$: Observable<Expansion[]>;

  constructor() {
    const selectedExpansions = this.initializeSelectedExpansions();
    this.selectedExpansionsSubject = new BehaviorSubject<Expansion[]>(selectedExpansions);
    this.selectedExpansions$ = this.selectedExpansionsSubject.asObservable();
  }

  private initializeSelectedExpansions(): Expansion[] {
    const jsonExpansions: string = localStorage.getItem(this.storageId);
    if (!jsonExpansions) {
      return this.initalExpansionSelection;
    } else {
      return JSON.parse(jsonExpansions);
    }
  }

  get selectedExpansions(): Expansion[] {
    return this.selectedExpansionsSubject.getValue();
  }

  set selectedExpansions(newSelection: Expansion[]) {
    const jsonExpansions: string = JSON.stringify(newSelection);
    localStorage.setItem(this.storageId, jsonExpansions);
    this.selectedExpansionsSubject.next(newSelection);
  }
}
