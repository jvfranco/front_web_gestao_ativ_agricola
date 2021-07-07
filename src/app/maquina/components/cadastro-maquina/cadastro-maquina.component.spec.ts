import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMaquinaComponent } from './cadastro-maquina.component';

describe('CadastroMaquinaComponent', () => {
  let component: CadastroMaquinaComponent;
  let fixture: ComponentFixture<CadastroMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
