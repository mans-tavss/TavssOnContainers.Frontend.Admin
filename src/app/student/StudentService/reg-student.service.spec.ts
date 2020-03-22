import { TestBed } from '@angular/core/testing';

import { RegStudentService } from './reg-student.service';

describe('RegStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegStudentService = TestBed.get(RegStudentService);
    expect(service).toBeTruthy();
  });
});
