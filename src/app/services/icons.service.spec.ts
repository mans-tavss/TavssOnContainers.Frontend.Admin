import { TestBed } from '@angular/core/testing';

import { ICONSService } from './icons.service';

describe('ICONSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ICONSService = TestBed.get(ICONSService);
    expect(service).toBeTruthy();
  });
});
