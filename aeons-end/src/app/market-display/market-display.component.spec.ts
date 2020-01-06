import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDisplayComponent } from './market-display.component';

@Component({
  selector: 'app-single-game-market-display',
  template: '<p>Single Game Market Display</p>'
})
class MockSingleGameMarketDisplayComponent {}

@Component({
  selector: 'app-expedition-unknown-display',
  template: '<p>Expedition Unknown Display</p>'
})
class MockExpeditionUnknownDisplayComponent {}

@Component({
  selector: 'app-start-expedition-barracks-display',
  template: '<p>Start Expedition Barracks Display</p>'
})
class MockStartExpeditionBarracksDisplayComponent {}

describe('MarketDisplayComponent', () => {
  let component: MarketDisplayComponent;
  let fixture: ComponentFixture<MarketDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MarketDisplayComponent,
        MockSingleGameMarketDisplayComponent,
        MockExpeditionUnknownDisplayComponent,
        MockStartExpeditionBarracksDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
