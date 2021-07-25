import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOcorrenciaComponent } from './home-ocorrencia.component';

describe('HomeOcorrenciaComponent', () => {
  let component: HomeOcorrenciaComponent;
  let fixture: ComponentFixture<HomeOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOcorrenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
