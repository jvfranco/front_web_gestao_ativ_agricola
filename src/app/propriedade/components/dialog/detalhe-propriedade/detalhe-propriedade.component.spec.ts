import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePropriedadeComponent } from './detalhe-propriedade.component';

describe('DetalhePropriedadeComponent', () => {
  let component: DetalhePropriedadeComponent;
  let fixture: ComponentFixture<DetalhePropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
