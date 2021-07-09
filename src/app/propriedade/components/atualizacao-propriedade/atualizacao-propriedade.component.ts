import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-atualizacao-propriedade',
  templateUrl: './atualizacao-propriedade.component.html',
  styleUrls: ['./atualizacao-propriedade.component.css']
})
export class AtualizacaoPropriedadeComponent implements OnInit {

  map?: Map;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      target: 'ol-map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([-50.4227242924097, -22.66134868581503]),
        zoom: 8
      })
    });
  }

}
