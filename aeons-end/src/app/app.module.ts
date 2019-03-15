import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketSettingsComponent } from './market-settings/market-settings.component';
import { MarketSelectionComponent } from './market-selection/market-selection.component';
import { ExpansionChooserComponent } from './expansion-chooser/expansion-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketSettingsComponent,
    MarketSelectionComponent,
    ExpansionChooserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
