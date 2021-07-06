import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSafraComponent } from './cadastro-safra.component';

describe('CadastroSafraComponent', () => {
  let component: CadastroSafraComponent;
  let fixture: ComponentFixture<CadastroSafraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroSafraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
