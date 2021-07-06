import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHibridoComponent } from './cadastro-hibrido.component';

describe('CadastroHibridoComponent', () => {
  let component: CadastroHibridoComponent;
  let fixture: ComponentFixture<CadastroHibridoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHibridoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHibridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
