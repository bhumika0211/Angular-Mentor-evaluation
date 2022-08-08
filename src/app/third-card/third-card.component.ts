import { Component, OnInit } from '@angular/core';
import{Chart, registerables} from 'node_modules/chart.js';
import * as echarts from 'echarts';
Chart.register(...registerables);
@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.css']
})
export class ThirdCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var chartDom:any = document.getElementById('graph');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: ['12p', '3p', '6p', '9p', '12p', '6p', '9p']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
};

option && myChart.setOption(option);



}
}