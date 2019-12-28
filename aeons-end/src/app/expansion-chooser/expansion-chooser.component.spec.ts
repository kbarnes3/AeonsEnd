import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expansion } from '../expansion';
import { ExpansionChooserComponent } from './expansion-chooser.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpansionSelectionService } from '../expansion-selection.service';

const numberOfExpansions: number = 10;

@Component({
  selector: 'app-expansion-chooser-item',
  template: '<div class="expansion-list-item">Expansion</div>'
})
class MockExpansionChooserItemComponent {
  @Input() title: string;
  private _included: boolean;
  get included(): boolean {
    return this._included;
  }
  @Input()
  set included(included: boolean) {
    this._included = included;
    this.includedChange.emit(this._included);
  }
  @Output() includedChange: EventEmitter<boolean> = new EventEmitter();

  setIndeterminate(indeterminate: boolean): void {
  }
}

class MockExpansionSelectionService {
  private _selectedExpansions: Expansion[] = [ Expansion.Base ];
  get selectedExpansions(): Expansion[] {
    return this._selectedExpansions;
  }

  set selectedExpansions(newSelection: Expansion[]) {
    this._selectedExpansions = newSelection;
  }
}

describe('ExpansionChooserComponent', () => {
  let component: ExpansionChooserComponent;
  let fixture: ComponentFixture<ExpansionChooserComponent>;
  let expansionSelectionService: Partial<ExpansionSelectionService>;
  const mockExpansionSelectionService: MockExpansionSelectionService = new MockExpansionSelectionService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ExpansionChooserComponent,
          MockExpansionChooserItemComponent
      ],
      providers: [ {provide: ExpansionSelectionService, useValue: mockExpansionSelectionService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionChooserComponent);
    component = fixture.componentInstance;
    expansionSelectionService = fixture.debugElement.injector.get(ExpansionSelectionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a list of expansions', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.expansion-list-item').length).toEqual(numberOfExpansions + 1);
  });

  function expectEqualArrays<T>(expectedArr: T[], actualArr: T[]): void {
    expect(expectedArr.length).toEqual(actualArr.length);

    for (let i = 0; i < actualArr.length; i++) {
      expect(expectedArr[i]).toEqual(actualArr[i]);
    }
  }

  it('should set \'expansions\' based on the selected options', () => {
    component.displayedExpansions[Expansion.Base].included = false;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([], expansionSelectionService.selectedExpansions);

    component.displayedExpansions[Expansion.Base].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.Base], expansionSelectionService.selectedExpansions);

    component.displayedExpansions[Expansion.DiceTowerPromo].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.Base, Expansion.DiceTowerPromo], expansionSelectionService.selectedExpansions);

    component.displayedExpansions[Expansion.Base].included = false;
    component.displayedExpansions[Expansion.DiceTowerPromo].included = false;

    component.displayedExpansions[Expansion.TheDepths].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.TheDepths], expansionSelectionService.selectedExpansions);
    component.displayedExpansions[Expansion.TheDepths].included = false;

    component.displayedExpansions[Expansion.TheNameless].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.TheNameless], expansionSelectionService.selectedExpansions);
    component.displayedExpansions[Expansion.TheNameless].included = false;

    component.displayedExpansions[Expansion.WarEternal].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.WarEternal], expansionSelectionService.selectedExpansions);
    component.displayedExpansions[Expansion.WarEternal].included = false;

    component.displayedExpansions[Expansion.TheVoid].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.TheVoid], expansionSelectionService.selectedExpansions);
    component.displayedExpansions[Expansion.TheVoid].included = false;

    component.displayedExpansions[Expansion.TheOuterDark].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.TheOuterDark], expansionSelectionService.selectedExpansions);
    component.displayedExpansions[Expansion.TheOuterDark].included = false;

    component.displayedExpansions[Expansion.DiceTowerPromo].included = true;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.DiceTowerPromo], expansionSelectionService.selectedExpansions);
    component.displayedExpansions[Expansion.DiceTowerPromo].included = false;
  });
});
