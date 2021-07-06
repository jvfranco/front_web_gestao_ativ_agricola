import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSafraComponent } from './listagem-safra.component';

describe('ListagemSafraComponent', () => {
  let component: ListagemSafraComponent;
  let fixture: ComponentFixture<ListagemSafraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemSafraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
