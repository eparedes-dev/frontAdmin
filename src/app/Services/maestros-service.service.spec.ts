import { TestBed } from '@angular/core/testing';

import { MaestrosServiceService } from './maestros-service.service';

describe('MaestrosServiceService', () => {
  let service: MaestrosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestrosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
