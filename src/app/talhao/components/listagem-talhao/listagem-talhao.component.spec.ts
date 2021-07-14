import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTalhaoComponent } from './listagem-talhao.component';

describe('ListagemTalhaoComponent', () => {
  let component: ListagemTalhaoComponent;
  let fixture: ComponentFixture<ListagemTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
