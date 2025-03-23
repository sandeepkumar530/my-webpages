import { TestBed } from '@angular/core/testing';

import { FlipcartappService } from './flipcartapp.service';

describe('FlipcartappService', () => {
  let service: FlipcartappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipcartappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
