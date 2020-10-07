import {Component, OnInit} from '@angular/core';
import {Series} from '../../models/series/series';
import {SeriesService} from '../../controllers/series/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public series: Series[];

  constructor(seriesService: SeriesService) {
    this.series = seriesService.getAllSeries();
  }

  ngOnInit(): void {
  }

}
