import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketSelectionComponent } from './market-selection.component';

describe('MarketSelectionComponent', () => {
  let component: MarketSelectionComponent;
  let fixture: ComponentFixture<MarketSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
