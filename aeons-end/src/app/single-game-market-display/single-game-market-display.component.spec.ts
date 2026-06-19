import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGameMarketDisplayComponent } from './single-game-market-display.component';
import { Component } from '@angular/core';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';

@Component({
    selector: 'app-market-selection',
    template: '<p>Market Selection</p>',
})
class MockMarketSelectionComponent {}

describe('SingleGameMarketDisplayComponent', () => {
  let component: SingleGameMarketDisplayComponent;
  let fixture: ComponentFixture<SingleGameMarketDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .overrideComponent(SingleGameMarketDisplayComponent, {
      remove: {
        imports: [MarketSelectionComponent],
      },
      add: {
        imports: [MockMarketSelectionComponent],
      },
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGameMarketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
