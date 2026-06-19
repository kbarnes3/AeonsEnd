import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSelectionComponent } from './market-selection.component';

describe('MarketSelectionComponent', () => {
  let component: MarketSelectionComponent;
  let fixture: ComponentFixture<MarketSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
