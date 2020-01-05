import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { MarketSettingsComponent } from './market-settings.component';
import { GameModeService } from '../game-mode.service';
import { MockGameModeService } from '../mocks/mock-game-mode-service';
import { GameMode } from '../game-mode';

@Component({
  selector: 'app-expansion-chooser',
  template: '<p>Expansions</p>'
})
class MockExpansionChooserComponent {}

describe('MarketSettingsComponent', () => {
  let component: MarketSettingsComponent;
  let fixture: ComponentFixture<MarketSettingsComponent>;
  let gameModeService: Partial<GameModeService>;
  const mockGameModeService: MockGameModeService = new MockGameModeService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MarketSettingsComponent,
        MockExpansionChooserComponent],
      providers: [
        { provide: GameModeService, useValue: mockGameModeService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSettingsComponent);
    component = fixture.componentInstance;
    gameModeService = fixture.debugElement.injector.get(GameModeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the expansion dropdown for single games', () => {
    gameModeService.selectedGameMode = GameMode.SingleGame;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.expeditionDropdown')).toBeFalsy();
  });

  it('should show the expansion dropdown for expeditions', () => {
    gameModeService.selectedGameMode = GameMode.ExpeditionUnknown;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.expeditionDropdown')).toBeTruthy();

    gameModeService.selectedGameMode = GameMode.ExpeditionStartBattle2;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.expeditionDropdown')).toBeTruthy();
  });
});
