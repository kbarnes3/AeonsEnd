import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MarketSettingsComponent } from './market-settings/market-settings.component';
import { MarketSelectionComponent } from './market-selection/market-selection.component';
import { ExpansionChooserComponent } from './expansion-chooser/expansion-chooser.component';
import { ExpansionChooserItemComponent } from './expansion-chooser-item/expansion-chooser-item.component';
import { MarketDisplayComponent } from './market-display/market-display.component';
import { SingleGameMarketDisplayComponent } from './single-game-market-display/single-game-market-display.component';
import { StartExpeditionBarracksDisplayComponent } from './start-expedition-barracks-display/start-expedition-barracks-display.component';
import { ExpeditionUnknownDisplayComponent } from './expedition-unknown-display/expedition-unknown-display.component';
import { MageDisplayComponent } from './mage-display/mage-display.component';
import { NemesisDisplayComponent } from './nemesis-display/nemesis-display.component';
import { ExpeditionWinDisplayComponent } from './expedition-win-display/expedition-win-display.component';
import { ExpeditionLoseDisplayComponent } from './expedition-lose-display/expedition-lose-display.component';
import { ExpeditionStartBattleDisplayComponent } from './expedition-start-battle-display/expedition-start-battle-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketSettingsComponent,
    MarketSelectionComponent,
    ExpansionChooserComponent,
    ExpansionChooserItemComponent,
    MarketDisplayComponent,
    SingleGameMarketDisplayComponent,
    StartExpeditionBarracksDisplayComponent,
    ExpeditionUnknownDisplayComponent,
    MageDisplayComponent,
    NemesisDisplayComponent,
    ExpeditionWinDisplayComponent,
    ExpeditionLoseDisplayComponent,
    ExpeditionStartBattleDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
