import { TestBed, inject } from '@angular/core/testing';

import { ProductListService } from './product-list.service';

describe('ProductListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListService]
    });
  });

  it('should be created', inject([ProductListService], (service: ProductListService) => {
    expect(service).toBeTruthy();
  }));
});
