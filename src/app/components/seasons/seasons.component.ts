import {Component, OnInit} from '@angular/core';
import {Season} from '../../models/season/season';
import {SeriesComponent} from '../series/series.component';
import {Series} from '../../models/series/series';
import {SeasonsService} from '../../controllers/seasons/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  public seasons: Season[];

  constructor(seasonService: SeasonsService) {
    this.seasons = seasonService.getAllSeasons();
  }

  ngOnInit(): void {
  }
}
