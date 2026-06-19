import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionWinDisplayComponent } from './expedition-win-display.component';
import { MarketSelectionComponent } from '../market-selection/market-selection.component';

@Component({
    selector: 'app-market-selection',
    template: '<p>Market Selection</p>',
})
class MockMarketSelectionComponent {}

describe('ExpeditionWinDisplayComponent', () => {
  let component: ExpeditionWinDisplayComponent;
  let fixture: ComponentFixture<ExpeditionWinDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .overrideComponent(ExpeditionWinDisplayComponent, {
      remove: {
        imports: [MarketSelectionComponent]
      },
      add: {
        imports: [MockMarketSelectionComponent]
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionWinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
