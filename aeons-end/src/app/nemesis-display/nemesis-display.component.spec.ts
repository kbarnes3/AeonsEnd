import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemesisDisplayComponent } from './nemesis-display.component';

describe('NemesisDisplayComponent', () => {
  let component: NemesisDisplayComponent;
  let fixture: ComponentFixture<NemesisDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NemesisDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
