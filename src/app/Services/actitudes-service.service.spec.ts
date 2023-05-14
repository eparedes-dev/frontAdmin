import { TestBed } from '@angular/core/testing';

import { ActitudesServiceService } from './actitudes-service.service';

describe('ActitudesServiceService', () => {
  let service: ActitudesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActitudesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
