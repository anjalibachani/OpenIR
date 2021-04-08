import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Datamap from '../../assets/datamaps.world.min.js';
import * as d3 from '../../assets/d3.min.js';
import { DataService } from '../data.service.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  d3;
  Datamap;

  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  @Input() country_data;
  constructor(private dataservice: DataService,private changeDetection: ChangeDetectorRef) {     
    this.dataservice.getCountryCount("*").subscribe((data) =>
    {
     this.country_data = data["data"];
     console.log(this.country_data);
    });
  }

  closeBox(){
    this.close.emit();
    console.log("Closing Box");
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){

  // Datamaps expect data in format:
  // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
  //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
  var dataset = {};

  // We need to colorize every country based on "numberOfWhatever"
  // colors should be uniq for every value.
  // For this purpose we create palette(using min/max series-value)
  console.log(this.country_data);
  var onlyValues = this.country_data.map(function(obj){ return obj[1]; });
  var minValue = Math.min.apply(null, onlyValues),
          maxValue = Math.max.apply(null, onlyValues);

  // create color palette function
  // color can be whatever you wish
  var paletteScale = d3.scale.linear()
          .domain([minValue,maxValue])
          .range(["#009688","#960000"]); // blue color

  // fill dataset in appropriate format
  this.country_data.forEach(function(item){ //
      // item example value ["USA", 70]
      var iso = item[0],
              value = item[1];
      dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
  });

  // render map
  var b = new Datamap({
      element: document.getElementById('container1'),
      projection: 'mercator', // big world map
      // countries don't listed in dataset will be painted with this color
      fills: { defaultFill: '#F5F5F5' },
      data: dataset,
      geographyConfig: {
          borderColor: '#DEDEDE',
          highlightBorderWidth: 2,
          // don't change color on mouse hover
          highlightFillColor: function(geo) {
              return geo['fillColor'] || '#F5F5F5';
          },
          // only change border
          highlightBorderColor: '#B7B7B7',
          // show desired information in tooltip
          popupTemplate: function(geo, data) {
              // don't show tooltip if country don't present in dataset
              if (!data) { return ; }
              // tooltip content
              return ['<div class="hoverinfo">',
                  '<strong>', geo.properties.name, '</strong>',
                  '<br>Count: <strong>', data.numberOfThings, '</strong>',
                  '</div>'].join('');
          }
      }
  });
  b.legend({legendTitle: 'Location Analytics'});
}


}
