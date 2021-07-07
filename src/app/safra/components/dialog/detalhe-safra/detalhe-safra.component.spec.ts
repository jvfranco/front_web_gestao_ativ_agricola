import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheSafraComponent } from './detalhe-safra.component';

describe('DetalheSafraComponent', () => {
  let component: DetalheSafraComponent;
  let fixture: ComponentFixture<DetalheSafraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheSafraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
