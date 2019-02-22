import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSettingsComponent } from './market-settings.component';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {MarketSource} from '../market-source';

@Component({
  selector: 'app-market-selection',
  template: '<p>Market Selection</p>'
})
class MockMarketSelectionComponent {
  generateMorket(marketSource: MarketSource) {

  }
}

describe('MarketSettingsComponent', () => {
  let component: MarketSettingsComponent;
  let fixture: ComponentFixture<MarketSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MarketSettingsComponent,
        MockMarketSelectionComponent],
      imports: [
        FormsModule
      ]

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
