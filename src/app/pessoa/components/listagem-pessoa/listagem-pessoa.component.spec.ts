import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPessoaComponent } from './listagem-pessoa.component';

describe('ListagemPessoaComponent', () => {
  let component: ListagemPessoaComponent;
  let fixture: ComponentFixture<ListagemPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
