import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionLoseDisplayComponent } from './expedition-lose-display.component';

@Component({
    selector: 'app-market-selection',
    template: '<p>Market Selection</p>',
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MockMarketSelectionComponent {}

@Component({
    selector: 'app-mage-display',
    template: '<p>Mage Display</p>',
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MockMageDisplayComponent {}

describe('ExpeditionLoseDisplayComponent', () => {
  let component: ExpeditionLoseDisplayComponent;
  let fixture: ComponentFixture<ExpeditionLoseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionLoseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
