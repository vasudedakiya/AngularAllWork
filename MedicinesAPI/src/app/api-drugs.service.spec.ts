import { TestBed } from '@angular/core/testing';

import { ApiDrugsService } from './api-drugs.service';

describe('ApiDrugsService', () => {
  let service: ApiDrugsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDrugsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
