import { TestBed, inject } from '@angular/core/testing';

import { PriceGroupService } from './price-group.service';

describe('PriceGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceGroupService]
    });
  });

  it('should be created', inject([PriceGroupService], (service: PriceGroupService) => {
    expect(service).toBeTruthy();
  }));
});
