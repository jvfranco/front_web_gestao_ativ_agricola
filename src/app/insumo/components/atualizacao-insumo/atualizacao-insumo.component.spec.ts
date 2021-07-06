import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoInsumoComponent } from './atualizacao-insumo.component';

describe('AtualizacaoInsumoComponent', () => {
  let component: AtualizacaoInsumoComponent;
  let fixture: ComponentFixture<AtualizacaoInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
