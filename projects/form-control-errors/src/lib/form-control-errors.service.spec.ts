import { TestBed } from '@angular/core/testing';

import { FormControlErrorsService } from './form-control-errors.service';

describe('FormControlErrorsService', () => {
  let service: FormControlErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
