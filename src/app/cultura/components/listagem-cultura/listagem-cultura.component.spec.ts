import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCulturaComponent } from './listagem-cultura.component';

describe('ListagemCulturaComponent', () => {
  let component: ListagemCulturaComponent;
  let fixture: ComponentFixture<ListagemCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCulturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
