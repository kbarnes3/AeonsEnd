import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleGameMarketDisplayComponent } from './single-game-market-display.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-market-selection',
  template: '<p>Market Selection</p>'
})
class MockMarketSelectionComponent {}

describe('SingleGameMarketDisplayComponent', () => {
  let component: SingleGameMarketDisplayComponent;
  let fixture: ComponentFixture<SingleGameMarketDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SingleGameMarketDisplayComponent,
        MockMarketSelectionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGameMarketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
