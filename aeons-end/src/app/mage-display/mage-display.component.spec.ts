import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MageDisplayComponent } from './mage-display.component';

describe('MageDisplayComponent', () => {
  let component: MageDisplayComponent;
  let fixture: ComponentFixture<MageDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MageDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
