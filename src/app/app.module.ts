import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SeriesComponent} from './components/series/series.component';
import {SeasonsComponent} from './components/seasons/seasons.component';
import {EpisodesComponent} from './components/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeasonsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
