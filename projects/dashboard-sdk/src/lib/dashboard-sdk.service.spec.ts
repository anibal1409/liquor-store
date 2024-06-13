import { TestBed } from '@angular/core/testing';

import { DashboardSdkService } from './dashboard-sdk.service';

describe('DashboardSdkService', () => {
  let service: DashboardSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
