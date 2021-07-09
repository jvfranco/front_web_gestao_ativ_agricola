import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPropriedadeComponent } from './listagem-propriedade.component';

describe('ListagemPropriedadeComponent', () => {
  let component: ListagemPropriedadeComponent;
  let fixture: ComponentFixture<ListagemPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
