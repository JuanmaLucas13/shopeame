import { TestBed } from '@angular/core/testing';

import { CriptosvcService } from './criptosvc.service';

describe('CriptosvcService', () => {
  let service: CriptosvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptosvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
