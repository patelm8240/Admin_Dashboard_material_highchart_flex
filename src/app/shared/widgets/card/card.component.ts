import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        data: this.data
      }]
    };
    //HC_exporting(Highcharts);

    setTimeout( () => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
