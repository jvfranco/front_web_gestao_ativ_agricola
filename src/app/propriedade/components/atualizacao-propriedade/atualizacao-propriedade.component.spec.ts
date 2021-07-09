import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoPropriedadeComponent } from './atualizacao-propriedade.component';

describe('AtualizacaoPropriedadeComponent', () => {
  let component: AtualizacaoPropriedadeComponent;
  let fixture: ComponentFixture<AtualizacaoPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
