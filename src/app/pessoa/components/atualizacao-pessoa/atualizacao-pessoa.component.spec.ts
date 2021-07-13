import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoPessoaComponent } from './atualizacao-pessoa.component';

describe('AtualizacaoPessoaComponent', () => {
  let component: AtualizacaoPessoaComponent;
  let fixture: ComponentFixture<AtualizacaoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
