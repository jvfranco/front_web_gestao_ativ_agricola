import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Propriedade } from 'src/app/propriedade/models';
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
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';


@Component({
  selector: 'app-mapa-propriedade',
  templateUrl: './mapa-propriedade.component.html',
  styleUrls: ['./mapa-propriedade.component.css']
})
export class MapaPropriedadeComponent implements OnInit {

  source = new VectorSource();
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
    @Inject(MAT_DIALOG_DATA) public data: Propriedade) { }

  ngOnInit(): void {
    this.obterGeolocalizacao();
    console.log('GEOLOCALIZAÇÃO: ' + this.geoLocalizacao);
    this.geraMapa();
    this.recuperaAreaECoordenadas();
  }

  style = new Style({
    stroke: new Stroke({
      color: 'red',
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  });

  rasterLayer: TileLayer = new Tile({
    source: new TileJSON({
      url: env.urlApiImgSatelite + env.keyApiSat,
      tileSize: 256,
      crossOrigin: 'anonymous'
    })
  });

  geraVectorLayer(): VectorLayer {
    if (this.data.coordenadas) {
      return new VectorLayer({
        source: new VectorSource({
          features: new GeoJSON().readFeatures(this.data.coordenadas)
        }),
        style: this.style
      });
    }
    return new VectorLayer({
      source: this.source
    })
  }

  // vectorLayer: VectorLayer = new VectorLayer({
  //   source: this.source
  // });

  view: View = new View({
    center: olProj.fromLonLat([-50.4227242924097, -22.66134868581503]),
    zoom: 15,
    projection: 'EPSG:3857'
  });

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
      layers: [this.rasterLayer, this.geraVectorLayer()],
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
        self.data.area = areaz;

        let writer = new GeoJSON();
        let obj = writer.writeFeatures([evt.feature]);
        console.log(`OBJETO KML: ${obj}`);
        self.data.coordenadas = obj;
      }
    });
  }
}
