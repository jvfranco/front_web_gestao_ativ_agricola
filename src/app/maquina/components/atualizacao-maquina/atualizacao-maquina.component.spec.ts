import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoMaquinaComponent } from './atualizacao-maquina.component';

describe('AtualizacaoMaquinaComponent', () => {
  let component: AtualizacaoMaquinaComponent;
  let fixture: ComponentFixture<AtualizacaoMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoMaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
