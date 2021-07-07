import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheInsumoComponent } from './detalhe-insumo.component';

describe('DetalheInsumoComponent', () => {
  let component: DetalheInsumoComponent;
  let fixture: ComponentFixture<DetalheInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
