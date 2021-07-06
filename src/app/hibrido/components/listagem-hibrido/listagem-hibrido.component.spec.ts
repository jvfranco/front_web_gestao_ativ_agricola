import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemHibridoComponent } from './listagem-hibrido.component';

describe('ListagemHibridoComponent', () => {
  let component: ListagemHibridoComponent;
  let fixture: ComponentFixture<ListagemHibridoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemHibridoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemHibridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
