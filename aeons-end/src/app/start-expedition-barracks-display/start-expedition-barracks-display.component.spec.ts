import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartExpeditionBarracksDisplayComponent } from './start-expedition-barracks-display.component';

@Component({
  selector: 'app-market-selection',
  template: '<p>Market Selection</p>'
})
class MockMarketSelectionComponent {}

describe('StartExpeditionBarracksDisplayComponent', () => {
  let component: StartExpeditionBarracksDisplayComponent;
  let fixture: ComponentFixture<StartExpeditionBarracksDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartExpeditionBarracksDisplayComponent,
        MockMarketSelectionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartExpeditionBarracksDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
