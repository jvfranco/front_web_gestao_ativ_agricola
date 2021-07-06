import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoSafraComponent } from './atualizacao-safra.component';

describe('AtualizacaoSafraComponent', () => {
  let component: AtualizacaoSafraComponent;
  let fixture: ComponentFixture<AtualizacaoSafraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoSafraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
