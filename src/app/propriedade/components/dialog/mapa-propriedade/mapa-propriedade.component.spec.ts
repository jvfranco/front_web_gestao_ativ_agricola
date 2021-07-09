import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPropriedadeComponent } from './mapa-propriedade.component';

describe('MapaPropriedadeComponent', () => {
  let component: MapaPropriedadeComponent;
  let fixture: ComponentFixture<MapaPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
