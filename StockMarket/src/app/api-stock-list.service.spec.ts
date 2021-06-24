import { TestBed } from '@angular/core/testing';

import { ApiStockListService } from './api-stock-list.service';

describe('ApiStockListService', () => {
  let service: ApiStockListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStockListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
