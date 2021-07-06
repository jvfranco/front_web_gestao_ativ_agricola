import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoMarcaComponent } from './atualizacao-marca.component';

describe('AtualizacaoMarcaComponent', () => {
  let component: AtualizacaoMarcaComponent;
  let fixture: ComponentFixture<AtualizacaoMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
