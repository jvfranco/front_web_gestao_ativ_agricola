import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoTalhaoComponent } from './atualizacao-talhao.component';

describe('AtualizacaoTalhaoComponent', () => {
  let component: AtualizacaoTalhaoComponent;
  let fixture: ComponentFixture<AtualizacaoTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
