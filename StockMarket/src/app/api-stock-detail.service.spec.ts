import { TestBed } from '@angular/core/testing';

import { ApiStockDetailService } from './api-stock-detail.service';

describe('ApiStockDetailService', () => {
  let service: ApiStockDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStockDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
