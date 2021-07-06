import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoHibridoComponent } from './atualizacao-hibrido.component';

describe('AtualizacaoHibridoComponent', () => {
  let component: AtualizacaoHibridoComponent;
  let fixture: ComponentFixture<AtualizacaoHibridoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoHibridoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoHibridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
