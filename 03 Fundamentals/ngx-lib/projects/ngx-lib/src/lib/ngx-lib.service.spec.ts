import { TestBed } from '@angular/core/testing';

import { NgxLibService } from './ngx-lib.service';

describe('NgxLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLibService = TestBed.get(NgxLibService);
    expect(service).toBeTruthy();
  });
});
