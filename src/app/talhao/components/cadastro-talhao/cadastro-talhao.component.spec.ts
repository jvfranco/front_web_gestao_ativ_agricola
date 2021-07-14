import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTalhaoComponent } from './cadastro-talhao.component';

describe('CadastroTalhaoComponent', () => {
  let component: CadastroTalhaoComponent;
  let fixture: ComponentFixture<CadastroTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
