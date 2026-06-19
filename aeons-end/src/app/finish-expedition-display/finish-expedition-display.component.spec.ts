import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishExpeditionDisplayComponent } from './finish-expedition-display.component';

describe('FinishExpeditionDisplayComponent', () => {
  let component: FinishExpeditionDisplayComponent;
  let fixture: ComponentFixture<FinishExpeditionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishExpeditionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
