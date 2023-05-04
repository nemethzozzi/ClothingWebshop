import { TestBed } from '@angular/core/testing';

import { itemsService } from './items.service';

describe('itemsService', () => {
  let service: itemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(itemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
