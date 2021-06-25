import { TestBed } from '@angular/core/testing';

import { ApiStockNewsService } from './api-stock-news.service';

describe('ApiStockNewsService', () => {
  let service: ApiStockNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStockNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
