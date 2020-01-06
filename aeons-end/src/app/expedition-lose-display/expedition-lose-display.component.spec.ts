import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionLoseDisplayComponent } from './expedition-lose-display.component';

@Component({
  selector: 'app-market-selection',
  template: '<p>Market Selection</p>'
})
class MockMarketSelectionComponent {}

@Component({
  selector: 'app-mage-display',
  template: '<p>Mage Display</p>'
})
class MockMageDisplayComponent {}

describe('ExpeditionLoseDisplayComponent', () => {
  let component: ExpeditionLoseDisplayComponent;
  let fixture: ComponentFixture<ExpeditionLoseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpeditionLoseDisplayComponent,
        MockMarketSelectionComponent,
        MockMageDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionLoseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
