import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

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

@Component({
  selector: 'app-expedition-start-battle-display',
  template: '<p>Expedition Start Battle Display</p>'
})
class MockExpeditionStartBattleDisplayComponent {}

@Component({
  selector: 'app-expedition-win-display',
  template: '<p>Expedition Win Display</p>'
})
class MockExpeditionWinDisplayComponent {}

@Component({
  selector: 'app-expedition-lose-display',
  template: '<p>Expedition Lose Display</p>'
})
class MockExpeditionLoseDisplayComponent {}

@Component({
  selector: 'app-finish-expedition-display',
  template: '<p>Finish Expedition Display</p>'
})
class MockFinishExpeditionDisplayComponent {}

describe('MarketDisplayComponent', () => {
  let component: MarketDisplayComponent;
  let fixture: ComponentFixture<MarketDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MarketDisplayComponent,
        MockSingleGameMarketDisplayComponent,
        MockExpeditionUnknownDisplayComponent,
        MockStartExpeditionBarracksDisplayComponent,
        MockExpeditionStartBattleDisplayComponent,
        MockExpeditionWinDisplayComponent,
        MockExpeditionLoseDisplayComponent,
        MockFinishExpeditionDisplayComponent
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
