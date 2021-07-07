import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMaquinaComponent } from './listagem-maquina.component';

describe('ListagemMaquinaComponent', () => {
  let component: ListagemMaquinaComponent;
  let fixture: ComponentFixture<ListagemMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemMaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
