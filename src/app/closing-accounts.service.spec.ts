import { TestBed, inject } from '@angular/core/testing';

import { ClosingAccountsService } from './closing-accounts.service';

describe('ClosingAccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClosingAccountsService]
    });
  });

  it('should be created', inject([ClosingAccountsService], (service: ClosingAccountsService) => {
    expect(service).toBeTruthy();
  }));
});
