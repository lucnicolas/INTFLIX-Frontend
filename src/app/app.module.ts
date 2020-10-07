import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import {AppComponent} from './app.component';
import {SeriesComponent} from './components/series/series.component';
import {SeasonsComponent} from './components/seasons/seasons.component';
import {EpisodesComponent} from './components/episodes/episodes.component';

const routes: Routes = [
  { path: 'episodes', component: EpisodesComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeasonsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
