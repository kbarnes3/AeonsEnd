import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Expansion } from '../expansion';
import { ExpansionChooserComponent } from './expansion-chooser.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpansionSelectionService } from '../expansion-selection.service';
import { MockExpansionSelectionService } from '../mocks/mock-expansion-selection-service';
import { EXPANSION_INFO } from '../expansion-info';

const numberOfExpansions: number = Object.keys(EXPANSION_INFO).length;

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

describe('ExpansionChooserComponent', () => {
  let component: ExpansionChooserComponent;
  let fixture: ComponentFixture<ExpansionChooserComponent>;
  let expansionSelectionService: Partial<ExpansionSelectionService>;
  const mockExpansionSelectionService: MockExpansionSelectionService = new MockExpansionSelectionService();

  beforeEach(waitForAsync(() => {
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
    // Make sure nothing is selected to start
    component.allIncluded = true;
    component.allIncluded = false;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([], expansionSelectionService.selectedExpansions);

    component.updateExpansionCheckbox(Expansion.Base, true);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.Base], expansionSelectionService.selectedExpansions);

    component.updateExpansionCheckbox(Expansion.DiceTowerPromo, true);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.Base, Expansion.DiceTowerPromo], expansionSelectionService.selectedExpansions);

    component.updateExpansionCheckbox(Expansion.Base, false);
    component.updateExpansionCheckbox(Expansion.DiceTowerPromo, false);

    component.updateExpansionCheckbox(Expansion.TheDepths, true);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.TheDepths], expansionSelectionService.selectedExpansions);
    component.updateExpansionCheckbox(Expansion.TheDepths, false);

    component.updateExpansionCheckbox(Expansion.TheNameless, true);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.TheNameless], expansionSelectionService.selectedExpansions);
    component.updateExpansionCheckbox(Expansion.TheNameless, false);
  });

  it('should force required expansions to be included', () => {
    // Make sure nothing is selected to start
    component.allIncluded = true;
    component.allIncluded = false;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([], expansionSelectionService.selectedExpansions);

    component.updateExpansionCheckbox(Expansion.TheNewAgePromo, true);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.DiceTowerPromo, Expansion.TheNewAgePromo], expansionSelectionService.selectedExpansions);
    component.updateExpansionCheckbox(Expansion.DiceTowerPromo, false);
    component.updateExpansionCheckbox(Expansion.TheNewAgePromo, false);
    component.updateSelectedExpansions();
  });

  it('should force expansions to be excluded if they are missing a dependency', () => {
    // Make sure nothing is selected to start
    component.allIncluded = true;
    component.allIncluded = false;
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([], expansionSelectionService.selectedExpansions);

    component.updateExpansionCheckbox(Expansion.DiceTowerPromo, true);
    component.updateExpansionCheckbox(Expansion.TheNewAgePromo, true);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([Expansion.DiceTowerPromo, Expansion.TheNewAgePromo], expansionSelectionService.selectedExpansions);

    component.updateExpansionCheckbox(Expansion.DiceTowerPromo, false);
    component.updateSelectedExpansions();
    expectEqualArrays<Expansion>([], expansionSelectionService.selectedExpansions);
  });
});
