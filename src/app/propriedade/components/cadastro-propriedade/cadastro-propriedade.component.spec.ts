import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPropriedadeComponent } from './cadastro-propriedade.component';

describe('CadastroPropriedadeComponent', () => {
  let component: CadastroPropriedadeComponent;
  let fixture: ComponentFixture<CadastroPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
