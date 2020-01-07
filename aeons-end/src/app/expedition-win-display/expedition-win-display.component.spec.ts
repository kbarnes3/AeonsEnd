import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionWinDisplayComponent } from './expedition-win-display.component';

@Component({
  selector: 'app-market-selection',
  template: '<p>Market Selection</p>'
})
class MockMarketSelectionComponent {}

describe('ExpeditionWinDisplayComponent', () => {
  let component: ExpeditionWinDisplayComponent;
  let fixture: ComponentFixture<ExpeditionWinDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpeditionWinDisplayComponent,
        MockMarketSelectionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionWinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
