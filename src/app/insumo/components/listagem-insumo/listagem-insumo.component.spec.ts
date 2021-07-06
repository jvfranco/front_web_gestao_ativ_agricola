import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemInsumoComponent } from './listagem-insumo.component';

describe('ListagemInsumoComponent', () => {
  let component: ListagemInsumoComponent;
  let fixture: ComponentFixture<ListagemInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
