import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCulturaComponent } from './cadastro-cultura.component';

describe('CadastroCulturaComponent', () => {
  let component: CadastroCulturaComponent;
  let fixture: ComponentFixture<CadastroCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCulturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
