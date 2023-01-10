import { TestBed } from '@angular/core/testing';

import { RestaurentApiService } from './restaurent-api.service';

describe('RestaurentApiService', () => {
  let service: RestaurentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
