import { TestBed } from '@angular/core/testing';

import { ListarSimboloService } from './listar-simbolo.service';

describe('ListarSimboloService', () => {
  let service: ListarSimboloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarSimboloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
