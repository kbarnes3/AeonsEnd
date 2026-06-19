import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDisplayComponent } from './market-display.component';
import { SingleGameMarketDisplayComponent } from '../single-game-market-display/single-game-market-display.component';
import { ExpeditionUnknownDisplayComponent } from '../expedition-unknown-display/expedition-unknown-display.component';
import { StartExpeditionBarracksDisplayComponent } from '../start-expedition-barracks-display/start-expedition-barracks-display.component';
import { ExpeditionStartBattleDisplayComponent } from '../expedition-start-battle-display/expedition-start-battle-display.component';
import { ExpeditionLoseDisplayComponent } from '../expedition-lose-display/expedition-lose-display.component';
import { ExpeditionWinDisplayComponent } from '../expedition-win-display/expedition-win-display.component';
import { FinishExpeditionDisplayComponent } from '../finish-expedition-display/finish-expedition-display.component';

@Component({
    selector: 'app-single-game-market-display',
    template: '<p>Single Game Market Display</p>',
})
class MockSingleGameMarketDisplayComponent {}

@Component({
    selector: 'app-expedition-unknown-display',
    template: '<p>Expedition Unknown Display</p>',
})
class MockExpeditionUnknownDisplayComponent {}

@Component({
    selector: 'app-start-expedition-barracks-display',
    template: '<p>Start Expedition Barracks Display</p>',
})
class MockStartExpeditionBarracksDisplayComponent {}

@Component({
    selector: 'app-expedition-start-battle-display',
    template: '<p>Expedition Start Battle Display</p>',
})
class MockExpeditionStartBattleDisplayComponent {}

@Component({
    selector: 'app-expedition-win-display',
    template: '<p>Expedition Win Display</p>',
})
class MockExpeditionWinDisplayComponent {}

@Component({
    selector: 'app-expedition-lose-display',
    template: '<p>Expedition Lose Display</p>',
})
class MockExpeditionLoseDisplayComponent {}

@Component({
    selector: 'app-finish-expedition-display',
    template: '<p>Finish Expedition Display</p>',
})
class MockFinishExpeditionDisplayComponent {}

describe('MarketDisplayComponent', () => {
  let component: MarketDisplayComponent;
  let fixture: ComponentFixture<MarketDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .overrideComponent(MarketDisplayComponent, {
      remove: {
        imports: [
          SingleGameMarketDisplayComponent,
          ExpeditionUnknownDisplayComponent,
          StartExpeditionBarracksDisplayComponent,
          ExpeditionStartBattleDisplayComponent,
          ExpeditionWinDisplayComponent,
          FinishExpeditionDisplayComponent,
          ExpeditionLoseDisplayComponent],
      },
      add: {
        imports: [
          MockSingleGameMarketDisplayComponent,
          MockExpeditionUnknownDisplayComponent,
          MockStartExpeditionBarracksDisplayComponent,
          MockExpeditionStartBattleDisplayComponent,
          MockExpeditionWinDisplayComponent,
          MockFinishExpeditionDisplayComponent,
          MockExpeditionLoseDisplayComponent],
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
