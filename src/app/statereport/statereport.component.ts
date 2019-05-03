import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HouselistingService } from './../services/houselisting.service';

@Component({
  selector: 'app-statereport',
  templateUrl: './statereport.component.html',
  styleUrls: ['./statereport.component.css']
})
export class StatereportComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartPlugins;

  public barChartData: ChartDataSets[];
  public listFetched = false;
  constructor(private houseListingService: HouselistingService) { }

  public States: Label[] = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");
  ngOnInit() {
    this.getPopulationCount().then((dataArray: number[]) => {
      this.barChartLabels = this.States;
      this.barChartType = 'bar';
      this.barChartLegend = true;

      this.barChartData = [
         { data: dataArray, label: 'Series A' },
        // { data: [1,2,3,4,5,6], label: 'Series A' },
      ];
      this.listFetched = true;
    });

  }



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getPopulationCount() {
    return new Promise(
      (resolve, reject) => {
        this.houseListingService.GetPopulationReport().subscribe((data:any) => {
          if(data.success)
          {
            let populationCount:number[]=data.data;
            console.log(populationCount);
            resolve(populationCount);
          }
         
        });
      });
  }


}
