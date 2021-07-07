import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCulturaComponent } from './detalhe-cultura.component';

describe('DetalheCulturaComponent', () => {
  let component: DetalheCulturaComponent;
  let fixture: ComponentFixture<DetalheCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCulturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
