import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { BaseChartDirective } from 'ng2-charts';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-covid-curve',
  templateUrl: './covid-curve.component.html',
  styleUrls: ['./covid-curve.component.css']
})
export class CovidCurveComponent implements OnInit {
  
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Input() chart;
  covid_data = null;
  show_loader = false;
  @Input() country_img;
  @Input() poi_name;
  @Input() country;
  closeGraph(){
    this.close.emit();
  }

  selectPOI(poi_name:string, country:string, name:string=" "){
    this.poi_name = poi_name;
    this.show_loader = true;
    this.dataservice.getCovidData(poi_name).subscribe((data) => {
      this.covid_data = data["data"];
      this.chart = {
        "datasets": [
          { "data": this.covid_data["covid"], "label": "Covid" },
          { "data": this.covid_data["non_covid"], "label": "Non Covid", "hidden": true},
          { "data": this.covid_data["normalized"], "label": "Normalized" },
          { "data": this.covid_data["normalized"], "label": "Line", "type": "line" }
        ],
        "labels": ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
        "options": {
          "legend": {
            "text": "Monthly tweet chart",
            "display": true,
          },
          "scales": {
            "yAxes": [{
              "ticks": {
                "beginAtZero": true
              }
            }],
          }
        }
      }
      console.log(this.chart);
      this.show_loader = false;
      if(country != ''){
        this.country_img = country;
        this.country = this.capitalizeFirstLetter(country);
        this.poi_name = this.capitalizeFirstLetter(poi_name);
      }
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(private dataservice: DataService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
