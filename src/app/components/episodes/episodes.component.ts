import {Component, OnInit} from '@angular/core';
import {Episode} from '../../models/episode/episode';
import {SeasonsComponent} from '../seasons/seasons.component';
import {Season} from '../../models/season/season';
import {Series} from '../../models/series/series';

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

  // This function return information about the Episode passed in param
  public getEpisodeById(id: number): Episode {
    return this.episodes[id];
  }

  // This function return the list of Episode
  public getAllEpisodes(): Episode[] {
    return this.episodes;
  }

  // This function create a new Episode
  public addEpisode( id: number,
                     fkSeason: Season,
                     title: string,
                     num: number,
                     seen: boolean = false
                    ): void {
    const newEpisode = new Episode(id, fkSeason, title, num, seen);
    this.episodes.push(newEpisode);
  }

  // This function remove an entry from Series object
  public removeEpisode(id: number): void{
    this.episodes.splice(id);
  }

}
