import {Component, OnInit} from '@angular/core';
import {Episode} from '../../models/episode/episode';
import {SeasonsComponent} from '../seasons/seasons.component';
import {Season} from '../../models/season/season';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  public seasons: Season[];
  public episodes: Episode[];

  constructor() {
    this.seasons = new SeasonsComponent().getAllSeasons();
    this.episodes = [
      new Episode(1, this.seasons[0], 'MyEpisode1', 1),
      new Episode(2, this.seasons[0], 'MyEpisode2', 2),
      new Episode(3, this.seasons[1], 'MyEpisode1', 1),
      new Episode(4, this.seasons[1], 'MyEpisode2', 2),
      new Episode(5, this.seasons[2], 'MyEpisode1', 1),
      new Episode(6, this.seasons[2], 'MyEpisode2', 2),
      new Episode(7, this.seasons[3], 'MyEpisode1', 1),
      new Episode(8, this.seasons[3], 'MyEpisode2', 2),

    ];
  }

  ngOnInit(): void {
  }

  public getEpisodeById(id: number): Episode {
    return this.episodes[id];
  }

  public getAllEpisodes(): Episode[] {
    return this.episodes;
  }

}
