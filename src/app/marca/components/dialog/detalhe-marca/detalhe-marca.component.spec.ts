import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMarcaComponent } from './detalhe-marca.component';

describe('DetalheMarcaComponent', () => {
  let component: DetalheMarcaComponent;
  let fixture: ComponentFixture<DetalheMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
