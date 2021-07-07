import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoUsuarioComponent } from './atualizacao-usuario.component';

describe('AtualizacaoUsuarioComponent', () => {
  let component: AtualizacaoUsuarioComponent;
  let fixture: ComponentFixture<AtualizacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
