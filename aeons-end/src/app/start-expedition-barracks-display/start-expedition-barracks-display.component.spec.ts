import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartExpeditionBarracksDisplayComponent } from './start-expedition-barracks-display.component';

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

@Component({
  selector: 'app-nemesis-display',
  template: '<p>Nemesis Display</p>'
})
class MockNemesisDisplayComponent {}

describe('StartExpeditionBarracksDisplayComponent', () => {
  let component: StartExpeditionBarracksDisplayComponent;
  let fixture: ComponentFixture<StartExpeditionBarracksDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartExpeditionBarracksDisplayComponent,
        MockMarketSelectionComponent,
        MockMageDisplayComponent,
        MockNemesisDisplayComponent
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
