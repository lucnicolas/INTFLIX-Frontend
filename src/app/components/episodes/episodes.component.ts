import {Component, OnInit} from '@angular/core';
import {Episode} from '../../models/episode/episode';
import {SeasonsComponent} from '../seasons/seasons.component';
import {Season} from '../../models/season/season';
import {Series} from '../../models/series/series';
import {EpisodesService} from '../../controllers/episodes/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  public seasons: Season[];
  public episodes: Episode[];

  constructor(episodesService: EpisodesService) {
    this.episodes = episodesService.getAllEpisodes();
  }

  ngOnInit(): void {
  }

}
