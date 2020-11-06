import { TestBed } from '@angular/core/testing';

import { DexCalService } from './dex-cal.service';

describe('DexCalService', () => {
  let service: DexCalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexCalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
