import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMarcaComponent } from './listagem-marca.component';

describe('ListagemMarcaComponent', () => {
  let component: ListagemMarcaComponent;
  let fixture: ComponentFixture<ListagemMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
