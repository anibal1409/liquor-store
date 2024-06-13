import { TestBed } from '@angular/core/testing';

import { ApiInterfacesService } from './api-interfaces.service';

describe('ApiInterfacesService', () => {
  let service: ApiInterfacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterfacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
