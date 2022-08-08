import { Component, OnInit } from '@angular/core';
import{Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-first-card',
  templateUrl: './first-card.component.html',
  styleUrls: ['./first-card.component.css']
})
export class FirstCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart('ourChart', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'white',
                  'white',
                  'white',
                  'white',
                  'white',
              ],
              borderColor: [
                
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
