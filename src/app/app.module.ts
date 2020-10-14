import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import {AppComponent} from './app.component';
import {SeriesComponent} from './components/series/series.component';
import {SeasonsComponent} from './components/seasons/seasons.component';
import {EpisodesComponent} from './components/episodes/episodes.component';
import { PageNotFoundComponent } from './components/PageNotFound/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'episodes', component: EpisodesComponent},
  { path: 'episodes/:id', component: EpisodesComponent},
  { path: '',   redirectTo: '/episodes', pathMatch: 'full' }, // redirect to `episodes`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeasonsComponent,
    EpisodesComponent,
    PageNotFoundComponent
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
