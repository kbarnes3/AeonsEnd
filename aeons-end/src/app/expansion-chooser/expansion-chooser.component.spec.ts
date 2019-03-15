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
  });
});
