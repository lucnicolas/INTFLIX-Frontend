import {Component, OnInit} from '@angular/core';
import {Season} from '../../models/season/season';
import {SeriesComponent} from '../series/series.component';
import {Series} from '../../models/series/series';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  public series: Series[];
  public seasons: Season[];

  constructor() {
    this.series = new SeriesComponent().getAllSeries();
    this.seasons = [
      new Season(1, this.series[0], 1),
      new Season(2, this.series[0], 2),
      new Season(3, this.series[1], 1),
      new Season(4, this.series[1], 2),

    ];
  }

  ngOnInit(): void {
  }

  // This function return information about the seasons passed in param
  public getSeasonById(id: number): Season {
    return this.seasons[id];
  }

  // This function return the list of season
  public getAllSeasons(): Season[] {
    return this.seasons;
  }

  // This function create a new season
  public addSeason(id: number, fkSeries: Series, num: number): void{
    const newSeason = new Season(id, fkSeries, num);
    this.seasons.push(newSeason);
  }

  // This function remove an entry from Season object
  public removeSeason(id: number): void{
    this.seasons.splice(id);
  }

}
