import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Expansion} from '../expansion';
import {ExpansionChooserComponent} from './expansion-chooser.component';

describe('ExpansionChooserComponent', () => {
  let component: ExpansionChooserComponent;
  let fixture: ComponentFixture<ExpansionChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionChooserComponent ]
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

  function expectEqualArrays<T>(expectedArr: T[], actualArr: T[]): void {
    expect(expectedArr.length).toEqual(actualArr.length);

    for (let i = 0; i < actualArr.length; i++) {
      expect(expectedArr[i]).toEqual(actualArr[i]);
    }
  }

  it('should set \'expansions\' based on the selected options', () => {
    expectEqualArrays<Expansion>([], component.getSelectedExpansions());

    component.base = true;
    expectEqualArrays<Expansion>([Expansion.Base], component.getSelectedExpansions());

    component.diceTowerPromo = true;
    expectEqualArrays<Expansion>([Expansion.Base, Expansion.DiceTowerPromo], component.getSelectedExpansions());

    component.base = false;
    component.diceTowerPromo = false;

    component.theDepths = true;
    expectEqualArrays<Expansion>([Expansion.TheDepths], component.getSelectedExpansions());
    component.theDepths = false;

    component.theNameless = true;
    expectEqualArrays<Expansion>([Expansion.TheNameless], component.getSelectedExpansions());
    component.theNameless = false;

    component.warEternal = true;
    expectEqualArrays<Expansion>([Expansion.WarEternal], component.getSelectedExpansions());
    component.warEternal = false;

    component.theVoid = true;
    expectEqualArrays<Expansion>([Expansion.TheVoid], component.getSelectedExpansions());
    component.theVoid = false;

    component.theOuterDark = true;
    expectEqualArrays<Expansion>([Expansion.TheOuterDark], component.getSelectedExpansions());
    component.theOuterDark = false;

    component.diceTowerPromo = true;
    expectEqualArrays<Expansion>([Expansion.DiceTowerPromo], component.getSelectedExpansions());
    component.diceTowerPromo = false;
  });
});
