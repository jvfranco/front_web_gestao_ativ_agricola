import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoCulturaComponent } from './atualizacao-cultura.component';

describe('AtualizacaoCulturaComponent', () => {
  let component: AtualizacaoCulturaComponent;
  let fixture: ComponentFixture<AtualizacaoCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoCulturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
