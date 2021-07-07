import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheHibridoComponent } from './detalhe-hibrido.component';

describe('DetalheHibridoComponent', () => {
  let component: DetalheHibridoComponent;
  let fixture: ComponentFixture<DetalheHibridoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheHibridoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheHibridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
