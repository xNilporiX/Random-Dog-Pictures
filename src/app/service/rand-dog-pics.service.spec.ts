import { TestBed } from '@angular/core/testing';

import { RandDogPicsService } from './rand-dog-pics.service';

describe('RandDogPicsService', () => {
  let service: RandDogPicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandDogPicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
