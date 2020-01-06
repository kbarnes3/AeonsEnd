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
    ExpeditionUnknownDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
