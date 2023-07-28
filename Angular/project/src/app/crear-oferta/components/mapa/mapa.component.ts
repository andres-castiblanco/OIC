// Instalar npm install @angular/google-maps
// Instalar npm install @types/googlemaps --save-dev
// Instalar npm install leaflet@1.7.1

import { Component, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements AfterViewInit { 
  
  private map: any;
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 4.30246, -72.5811 ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    
    // this.map.on('click', () => { console.log(Event.latlng); });
    
  }

  constructor() {}

  ngAfterViewInit(): void { 
    this.initMap();
  } 

}

