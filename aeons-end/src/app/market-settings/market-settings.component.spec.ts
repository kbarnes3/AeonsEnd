import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MarketSettingsComponent} from './market-settings.component';
import {Component} from '@angular/core';
import {Expansion} from '../expansion';

@Component({
  selector: 'app-market-selection',
  template: '<p>Market Selection</p>'
})
class MockMarketSelectionComponent {
  generateMarket(marketSources: Expansion[]): void {

  }
}

@Component({
  selector: 'app-expansion-chooser',
  template: '<p>Expansions</p>'
})
class MockExpansionChooserComponent {
  getSelectedExpansions(): Expansion[] {
    return [Expansion.Base];
  }
}

describe('MarketSettingsComponent', () => {
  let component: MarketSettingsComponent;
  let fixture: ComponentFixture<MarketSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MarketSettingsComponent,
        MockMarketSelectionComponent,
        MockExpansionChooserComponent]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
