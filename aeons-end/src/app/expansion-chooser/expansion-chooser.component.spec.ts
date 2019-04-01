import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Expansion} from '../expansion';
import {ExpansionChooserComponent} from './expansion-chooser.component';
import {AppComponent} from '../app.component';
import {Component, Input} from '@angular/core';

const numberOfExpansions: number = 7;

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
  }
}

describe('ExpansionChooserComponent', () => {
  let component: ExpansionChooserComponent;
  let fixture: ComponentFixture<ExpansionChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ExpansionChooserComponent,
          MockExpansionChooserItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionChooserComponent);
    component = fixture.componentInstance;
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
    expectEqualArrays<Expansion>([], component.getSelectedExpansions());

    component.displayedExpansions[Expansion.Base].included = true;
    expectEqualArrays<Expansion>([Expansion.Base], component.getSelectedExpansions());

    component.displayedExpansions[Expansion.DiceTowerPromo].included = true;
    expectEqualArrays<Expansion>([Expansion.Base, Expansion.DiceTowerPromo], component.getSelectedExpansions());

    component.displayedExpansions[Expansion.Base].included = false;
    component.displayedExpansions[Expansion.DiceTowerPromo].included = false;

    component.displayedExpansions[Expansion.TheDepths].included = true;
    expectEqualArrays<Expansion>([Expansion.TheDepths], component.getSelectedExpansions());
    component.displayedExpansions[Expansion.TheDepths].included = false;

    component.displayedExpansions[Expansion.TheNameless].included = true;
    expectEqualArrays<Expansion>([Expansion.TheNameless], component.getSelectedExpansions());
    component.displayedExpansions[Expansion.TheNameless].included = false;

    component.displayedExpansions[Expansion.WarEternal].included = true;
    expectEqualArrays<Expansion>([Expansion.WarEternal], component.getSelectedExpansions());
    component.displayedExpansions[Expansion.WarEternal].included = false;

    component.displayedExpansions[Expansion.TheVoid].included = true;
    expectEqualArrays<Expansion>([Expansion.TheVoid], component.getSelectedExpansions());
    component.displayedExpansions[Expansion.TheVoid].included = false;

    component.displayedExpansions[Expansion.TheOuterDark].included = true;
    expectEqualArrays<Expansion>([Expansion.TheOuterDark], component.getSelectedExpansions());
    component.displayedExpansions[Expansion.TheOuterDark].included = false;

    component.displayedExpansions[Expansion.DiceTowerPromo].included = true;
    expectEqualArrays<Expansion>([Expansion.DiceTowerPromo], component.getSelectedExpansions());
    component.displayedExpansions[Expansion.DiceTowerPromo].included = false;
  });
});
