import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheTalhaoComponent } from './detalhe-talhao.component';

describe('DetalheTalhaoComponent', () => {
  let component: DetalheTalhaoComponent;
  let fixture: ComponentFixture<DetalheTalhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheTalhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheTalhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
