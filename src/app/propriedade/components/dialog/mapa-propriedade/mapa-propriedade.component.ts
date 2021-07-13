import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { environment as env } from '../../../../../environments/environment';

import Map from 'ol/Map';
import View from 'ol/View';
import * as olProj from 'ol/proj';
import Tile from 'ol/layer/Tile';
import TileJSON from 'ol/source/TileJSON';
import { Vector as VectorSource } from 'ol/source';
import { Draw } from 'ol/interaction';
import GeometryType from 'ol/geom/GeometryType';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { getArea } from 'ol/sphere';
import Polygon from 'ol/geom/Polygon';
import GeoJSON from 'ol/format/GeoJSON';
import Projection from 'ol/proj/Projection';


@Component({
  selector: 'app-mapa-propriedade',
  templateUrl: './mapa-propriedade.component.html',
  styleUrls: ['./mapa-propriedade.component.css']
})
export class MapaPropriedadeComponent implements OnInit {

  source = new VectorSource();

  rasterLayer: TileLayer = new Tile({
    source: new TileJSON({
      url: env.urlApiImgSatelite + env.keyApiSat,
      tileSize: 256,
      crossOrigin: 'anonymous'
    })
  });

  vectorLayer: VectorLayer = new VectorLayer({
    source: this.source
  });

  view: View = new View({
    center: olProj.fromLonLat([-50.4227242924097, -22.66134868581503]),
    zoom: 15,
    projection: 'EPSG:3857'
  })

  draw!: Draw;

  geoLocalizacao!: string;
  latitude!: number;
  longitude!: number;
  map!: Map;
  area: any;
  coordenadas: any;

  satLayer!: TileLayer;

  constructor(
    public dialogRef: MatDialogRef<MapaPropriedadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.obterGeolocalizacao();
    console.log('GEOLOCALIZAÇÃO: ' + this.geoLocalizacao);
    this.geraMapa();
    this.recuperaAreaECoordenadas();
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
      layers: [this.rasterLayer, this.vectorLayer],
      view: this.view
    });
    this.addInteraction();
  }

  addInteraction() {
    this.draw = new Draw({
      source: this.source,
      type: GeometryType.POLYGON
    });
    this.map.addInteraction(this.draw);
  }

  recuperaAreaECoordenadas() {
    var self = this;
    this.draw.on('drawend', function (evt) {
      console.log(evt);
      let geo = evt.feature.getGeometry();
      if (geo instanceof Polygon) {
        let areaz = Math.round(getArea(geo) / 10000);
        console.log(`------------ AREA POLIGONO: ${areaz} ha`);
        self.data.area = areaz.toString();

        let writer = new GeoJSON();
        let obj = writer.writeFeatures([evt.feature]);
        console.log(`OBJETO GEOJSON: ${obj}`);
        self.data.coordenadas = obj;
      }
    });
  }

  imprime() {
    console.log(this.area);
  }
}
