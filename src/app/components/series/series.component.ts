import {Component, OnInit} from '@angular/core';
import {Series} from '../../models/series/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  public series: Series[];

  constructor() {
    this.series = [
      new Series(1, 'MySeries1'),
      new Series(1, 'MySeries2'),
    ];
  }

  ngOnInit(): void {
  }

  public getSeriesById(id: number): Series {
    return this.series[id];
  }

  public getAllSeries(): Series[] {
    return this.series;
  }

}
