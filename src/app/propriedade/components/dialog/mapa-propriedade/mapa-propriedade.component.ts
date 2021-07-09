import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { environment as env } from '../../../../../environments/environment';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Tile from 'ol/layer/Tile';
import TileJSON from 'ol/source/TileJSON';

@Component({
  selector: 'app-mapa-propriedade',
  templateUrl: './mapa-propriedade.component.html',
  styleUrls: ['./mapa-propriedade.component.css']
})
export class MapaPropriedadeComponent implements OnInit {

  geoLocalizacao!: string;
  latitude!: number;
  longitude!: number;
  map!: Map;

  satLayer!: TileLayer;

  constructor(
    public dialogRef: MatDialogRef<MapaPropriedadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.obterGeolocalizacao();
    console.log('GEOLOCALIZAÇÃO: ' + this.geoLocalizacao);
    this.geraMapa();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  obterGeolocalizacao(): string {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geoLocalizacao = `${position.coords.latitude}, ${position.coords.longitude}`;
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      })
    };
    return '';
  }

  geraMapa() {
    this.map = new Map({
      target: 'ol-map',
      layers: [
        new Tile({
          source: new TileJSON({
            url: env.urlApiImgSatelite + env.keyApiSat,
            tileSize: 256,
            crossOrigin: 'anonymous'
          })
        })
      ],
      view: new View({
        center: olProj.fromLonLat([-50.4227242924097, -22.66134868581503]),
        zoom: 15
      })
    });
  }

}
