import { TestBed } from '@angular/core/testing';

import { ValrelacionesService } from './valrelaciones.service';

describe('ValrelacionesService', () => {
  let service: ValrelacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValrelacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
