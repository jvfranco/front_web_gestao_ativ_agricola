import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAtividadeComponent } from './listagem-atividade.component';

describe('ListagemAtividadeComponent', () => {
  let component: ListagemAtividadeComponent;
  let fixture: ComponentFixture<ListagemAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
