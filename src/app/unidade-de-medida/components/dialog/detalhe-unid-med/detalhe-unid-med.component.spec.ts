import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheUnidMedComponent } from './detalhe-unid-med.component';

describe('DetalheUnidMedComponent', () => {
  let component: DetalheUnidMedComponent;
  let fixture: ComponentFixture<DetalheUnidMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheUnidMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheUnidMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
