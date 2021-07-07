import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMaquinaComponent } from './detalhe-maquina.component';

describe('DetalheMaquinaComponent', () => {
  let component: DetalheMaquinaComponent;
  let fixture: ComponentFixture<DetalheMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheMaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
