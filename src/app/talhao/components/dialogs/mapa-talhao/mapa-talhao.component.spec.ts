import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaTalhaoComponent } from './mapa-talhao.component';

describe('MapaTalhaoComponent', () => {
  let component: MapaTalhaoComponent;
  let fixture: ComponentFixture<MapaTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
