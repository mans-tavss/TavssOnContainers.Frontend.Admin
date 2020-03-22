import { TestBed } from '@angular/core/testing';

import { RegTaService } from './reg-ta.service';

describe('RegTaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegTaService = TestBed.get(RegTaService);
    expect(service).toBeTruthy();
  });
});
