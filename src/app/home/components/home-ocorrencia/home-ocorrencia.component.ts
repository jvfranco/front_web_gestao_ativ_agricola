import { Component, OnInit } from '@angular/core';

import { environment as env } from '../../../../environments/environment';

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
import Point from 'ol/geom/Point';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import { fromLonLat } from 'ol/proj';


import { HomeService } from '../../services';
import { Ocorrencia } from '../../models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Feature } from 'ol';

@Component({
  selector: 'app-home-ocorrencia',
  templateUrl: './home-ocorrencia.component.html',
  styleUrls: ['./home-ocorrencia.component.css']
})
export class HomeOcorrenciaComponent implements OnInit {

  map!: Map;
  source = new VectorSource();
  draw!: Draw;
  satLayer!: TileLayer;
  ocorrencias!: Ocorrencia[];
  features: Feature[] = [];

  constructor(
    private service: HomeService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.retornarOcorrenciasSemPaginacaoo();
    this.geraMapa();
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

  rasterLayer: TileLayer = new Tile({
    source: new TileJSON({
      url: env.urlApiImgSatelite + env.keyApiSat,
      tileSize: 256,
      crossOrigin: 'anonymous'
    })
  });

  view: View = new View({
    center: olProj.fromLonLat([-50.4227242924097, -22.66134868581503]),
    zoom: 15,
    projection: 'EPSG:3857'
  });

  geraVectorLayer(): VectorLayer {
    return new VectorLayer({
      source: new VectorSource({
        features: this.features
      })
    });
  };

  async retornarOcorrenciasSemPaginacaoo() {
    await this.service.retornarOcorrenciasSemPaginacaoo().subscribe(
      data => {
        this.ocorrencias = data;
        for (let i = 0; i < this.ocorrencias.length; i++) {
          this.features.push(
            new Feature({
              geometry: new Point(fromLonLat([ this.ocorrencias[i].coordenadas.longitude, this.ocorrencias[i].coordenadas.latitude ]))
            })
          );
        }
        console.log(JSON.stringify(this.features));
      },
      err => {
        this.snackbar.open('Ocorreram erros na busca das Ocorrências.', 'Erro', {duration: 5000});
      }
    )
  };

}
