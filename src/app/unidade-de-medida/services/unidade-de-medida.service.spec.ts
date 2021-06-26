import { TestBed } from '@angular/core/testing';

import { UnidadeDeMedidaService } from './unidade-de-medida.service';

describe('UnidadeDeMedidaService', () => {
  let service: UnidadeDeMedidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeDeMedidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
