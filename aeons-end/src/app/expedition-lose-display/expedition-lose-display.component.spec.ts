import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionLoseDisplayComponent } from './expedition-lose-display.component';

describe('ExpeditionLoseDisplayComponent', () => {
  let component: ExpeditionLoseDisplayComponent;
  let fixture: ComponentFixture<ExpeditionLoseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionLoseDisplayComponent ]
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
