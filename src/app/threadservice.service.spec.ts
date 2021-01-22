import { TestBed } from '@angular/core/testing';

import { ThreadserviceService } from './threadservice.service';

describe('ThreadserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreadserviceService = TestBed.get(ThreadserviceService);
    expect(service).toBeTruthy();
  });
});
