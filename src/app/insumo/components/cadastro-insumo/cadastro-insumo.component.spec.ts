import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInsumoComponent } from './cadastro-insumo.component';

describe('CadastroInsumoComponent', () => {
  let component: CadastroInsumoComponent;
  let fixture: ComponentFixture<CadastroInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
