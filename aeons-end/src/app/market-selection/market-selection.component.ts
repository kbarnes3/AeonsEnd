import {Component, OnInit} from '@angular/core';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../market-card-type';
import {MarketService} from '../market.service';
import {Expansion} from '../expansion';
import { GameModeService } from '../game-mode.service';
import { GameMode } from '../game-mode';

@Component({
  selector: 'app-market-selection',
  templateUrl: './market-selection.component.html',
  styleUrls: ['./market-selection.component.css']
})
export class MarketSelectionComponent implements OnInit {

  constructor(private marketService: MarketService, private gameModeService: GameModeService) { }

  cards: MarketCard[];
  expeditionMode: boolean;

  ngOnInit() {
    this.marketService.marketCards$.subscribe((cards: MarketCard[]) => {
      this.cards = cards;
    });
    this.cards = this.marketService.marketCards;

    this.gameModeService.selectedGameMode$.subscribe((newGameMode: GameMode) => {
      this.updateExpeditionMode(newGameMode);
    });
    this.updateExpeditionMode(this.gameModeService.selectedGameMode);
  }

  getCardCssClass(type: MarketCardType): string {
    switch (type) {
      case MarketCardType.Gem:
        return 'gem-card';
      case MarketCardType.Relic:
        return 'relic-card';
      case MarketCardType.Spell:
        return 'spell-card';
    }
  }

  getCardTypeLabel(type: MarketCardType): string {
    switch (type) {
      case MarketCardType.Gem:
        return 'Gem';
      case MarketCardType.Relic:
        return 'Relic';
      case MarketCardType.Spell:
        return 'Spell';
    }
  }

  private updateExpeditionMode(gameMode: GameMode): void {
    this.expeditionMode = (gameMode !== GameMode.SingleGame);
  }
}
