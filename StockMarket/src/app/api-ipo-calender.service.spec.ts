import { TestBed } from '@angular/core/testing';

import { ApiIpoCalenderService } from './api-ipo-calender.service';

describe('ApiIpoCalenderService', () => {
  let service: ApiIpoCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIpoCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
